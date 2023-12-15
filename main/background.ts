import path from 'path'
import { app, ipcMain, Menu, Tray } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import util from './helpers/util';
import isElevated from 'native-is-elevated';
import fixPath from 'fix-path';

import inputEvent from 'input-event';
import si from 'systeminformation';

// Ensure Electron apps subprocess on macOS and Linux inherit system $PATH
fixPath();

const isProd = process.env.NODE_ENV === 'production'

console.log('>>>>>>>>>>>>> isProd: ', isProd)
console.log('>>>>>>>>>>>>> isElevated: ', isElevated())

let tray = null;
let mainWindow = null;

async function runApp(callback)
{
  // it works
  if (!isElevated()) {
    try {
      //await util.runProcessElevated(app.getAppPath() + '/main/bin/nbfc status -a && echo 1');
      
      let i = 0;
      setInterval(async () => {
        const nbfcStatus = JSON.parse(await util.runProcess('cat /var/run/nbfc_service.state.json &'));
        
        console.log('nbfcStatus >>>>>>>>>>>>>>> ' + i);
        console.log('Temperature: ', nbfcStatus.temperature);
        console.log('speed cooler CPU: ', nbfcStatus.fans[0].current_speed);
        console.log('speed target CPU: ', nbfcStatus.fans[0].target_speed);
        console.log('speed steps CPU: ', nbfcStatus.fans[0].speed_steps);
        console.log('automode CPU: ', nbfcStatus.fans[0].automode);

        console.log('speed cooler GPU: ', nbfcStatus.fans[1].current_speed);
        console.log('speed target GPU: ', nbfcStatus.fans[1].target_speed);
        console.log('speed steps GPU: ', nbfcStatus.fans[1].speed_steps);
        console.log('automode GPU: ', nbfcStatus.fans[1].automode);


        const status = await util.runProcess('nbfc status -a &');
        console.log('Status ::::::');
        console.log(status);

        // promises style - new since version 3
        si.cpuTemperature()
          .then(data => {
            console.log(data)
          })
          .catch(error => console.error(error));

        si.graphics()
          .then(data => {
            console.log(data)
            mainWindow.webContents.send('graphics-stats', data);
          })
          .catch(error => console.error(error));

        i++;
      }, 5000);

    } catch (e) {
      console.error(e)
    }
  }

  typeof(callback) == 'function' ? callback() : null;
}

async function createTray(mainWindow) {

  try {
    let icon = path.join(__dirname + '/../') + '/app/Acer-Logo.png';

    tray = new Tray(icon)
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Abrir',
        click: () => {
          mainWindow.show();
        },
      },
      {
        label: 'Fechar',
        click: () => {
          mainWindow.quit();
        },
      },
      {
        label: 'Sair',
        click: () => {
          // Isso fechará completamente a aplicação
          app.quit(); 
          process.exit(0);
        },
      },
    ])

    tray.setToolTip('MM Acer Nitro Fan Control')
    tray.setContextMenu(contextMenu)

    // Lidar com o clique na bandeja para mostrar a janela
    let trayClickCount = 0;
    const trayDoubleClickInterval = 300; // Intervalo para considerar como duplo clique (em milissegundos)

    tray.on('click', () => {
      trayClickCount++;

      setTimeout(() => {
        if (trayClickCount === 1) {
          // Clique único
          if (mainWindow.isVisible()) {
            mainWindow.hide();
          } else {
            mainWindow.show();
          }
        } else if (trayClickCount === 2) {
          // Duplo clique
          mainWindow.show();
        }

        trayClickCount = 0;
      }, trayDoubleClickInterval);
    });


  } catch(e) {
    console.error(e)
  }

}

async function setupShortcuts(mainWindow) {
  // Substitua '/dev/input/eventX' pelo caminho do dispositivo de entrada correto
  const keyboard = new inputEvent('/dev/input/by-path/platform-i8042-serio-0-event-kbd');
  keyboard.on('data', function (event) {
      if (event.type === 4 && event.code === 4 && event.value === 245) {
        mainWindow.show();
      }
  });
}

runApp(() => {

  if (isProd) {
    serve({ directory: 'app' })
  } else {
    app.setPath('userData', `${app.getPath('userData')} (development)`)
  }
  
  ;(async () => {

    app.whenReady().then(async () => {

      //console.log('app.getAppPath() ==>> ', app.getAppPath())
      console.log('app.getGPUInfo() ==>> ', await app.getGPUInfo('complete'))
      console.log('app.getAppPath("appData") ==>> ', await app.getPath('appData') + '/' + app.getName())
      console.log('app.getAppPath("module") ==>> ', await app.getPath('module'))
      console.log('app.getAppPath("exe") ==>> ', await app.getPath('exe'))
      console.log('app.getAppMetrics() ==>> ', await app.getAppMetrics())
      console.log('app.getName() ==>> ', await app.getName())
      console.log('app.getPath("temp") ==>> ', await app.getPath('temp'))
      
      mainWindow = createWindow('main', {
        width: 1240,
        height: 800,
        webPreferences: {
          nodeIntegration: true,
          preload: path.join(__dirname, 'preload.js'),
        },
        frame: false,
      })

      // Evento para minimizar a janela ao clicar no botão de fechar
      mainWindow.on('close', (event) => {
        event.preventDefault(); // Evitar o fechamento padrão
        mainWindow.hide(); // Minimizar em vez de fechar
      });
    
      if (isProd) {
        await mainWindow.loadURL('app://./home')
      } else {
        const port = process.argv[2]
        await mainWindow.loadURL(`http://localhost:${port}/home`)
        //mainWindow.webContents.openDevTools()
      }
    
      // it works
      // try {
      //   await util.runProcessElevated(app.getAppPath() + '/main/bin/nbfc status -a && echo 1');
      // } catch (e) {
      //   await util.runProcessElevated(app.getAppPath() + '/main/bin/nbfc start &');
      // }
      await createTray(mainWindow);
      await setupShortcuts(mainWindow);

    });
  
  })()
  
  app.on('window-all-closed', () => {
    app.quit()
  })
  
  ipcMain.on('message', async (event, arg) => {
    event.reply('message', `${arg} World!`)
  })

  ipcMain.on('minimize-window', () => {
    mainWindow.minimize();
  });

  ipcMain.on('close-window', () => {
    mainWindow.close();
  });

});