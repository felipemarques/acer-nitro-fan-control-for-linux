import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

import util from './helpers/util';
import isElevated from 'native-is-elevated';
import fixPath from 'fix-path';

import si from 'systeminformation';

// Ensure Electron apps subprocess on macOS and Linux inherit system $PATH
fixPath();

const isProd = process.env.NODE_ENV === 'production'

console.log('>>>>>>>>>>>>> isProd: ', isProd)
console.log('>>>>>>>>>>>>> isElevated: ', isElevated())

async function runApp(callback)
{
  // it works
  if (!isElevated()) {
    try {
      //await util.runProcessElevated(app.getAppPath() + '/main/bin/nbfc status -a && echo 1');
      
      let i = 0;
      setTimeout(async () => {
        const nbfcStatus = JSON.parse(await util.runProcess('cat /var/run/nbfc_service.state.json &'));
        console.log('nbfcStatus >>>>>>>>>>>>>>> ' + i);
        console.log('Temperature: ', nbfcStatus.temperature);
        console.log('speed cooler CPU: ', nbfcStatus.fans[0].current_speed);
        console.log('speed cooler GPU: ', nbfcStatus.fans[1].current_speed);

        const status = await util.runProcess('nbfc status -a &');
        console.log('Status ::::::');
        console.log(status);

        // promises style - new since version 3
        si.cpuTemperature()
          .then(data => console.log(data))
          .catch(error => console.error(error));

        si.graphics()
          .then(data => console.log(data))
          .catch(error => console.error(error));


        i++;
      }, 2000);

    } catch (e) {
      console.error(e)
    }
  }

  typeof(callback) == 'function' ? callback() : null;
}

runApp(() => {

  if (isProd) {
    serve({ directory: 'app' })
  } else {
    app.setPath('userData', `${app.getPath('userData')} (development)`)
  }
  
  ;(async () => {
    await app.whenReady()
  
    console.log('app.path ==>> ', app.getAppPath())
    // console.log('app.getGPUInfo ==>> ', await app.getGPUInfo('complete'))
      
    const mainWindow = createWindow('main', {
      width: 1000,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
      frame: true,
      //titleBarStyle: 'hidden',
      //titleBarOverlay: true
    })
  
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
  
  })()
  
  app.on('window-all-closed', () => {
    app.quit()
  })
  
  ipcMain.on('message', async (event, arg) => {
    event.reply('message', `${arg} World!`)
  })
  

});