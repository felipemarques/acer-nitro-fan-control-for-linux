import { BrowserWindow, app, ipcMain } from 'electron';
import * as path from 'path';

// Import new dependencies
import fixPath from 'fix-path';
import isElevated from 'native-is-elevated';
import { exec } from 'child_process';
import util from './util';

// Ensure Electron apps subprocess on macOS and Linux inherit system $PATH
fixPath();

async function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    center: true,
    frame: true,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  await createWindow();
  //await runProcessElevated('/home/felipe/.nvm/versions/node/v16.19.1/bin/node /home/felipe/workspaces/mm-sense/src/socket.js');

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.handle('getAppPath', () => {
  console.log('getAppPath');
  console.log(app.getAppPath());
  return app.getAppPath();
});

// Modified version of VSCode isAdmin() method
// https://github.com/microsoft/vscode/blob/main/src/vs/platform/native/electron-main/nativeHostMainService.ts#L480
ipcMain.handle('isAdmin', () => {
  console.log('isAdmin');
  let isAdmin: boolean;
  if (process.platform === 'win32') {
    isAdmin = isElevated();
  } else {
    isAdmin = process.getuid() === 0;
  }
  return isAdmin;
});

// Run a simple command without elevated privileges
ipcMain.handle('runProcess', async (event, command: string) => {
  console.log('runProcess', command);
  return new Promise<string>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (stdout) {
        console.log('runProcess', stdout);
      }
      if (stderr) {
        console.log('runProcess', stderr);
      }
      if (error) {
        reject(error);
      } else {
        resolve(stdout.toString());
      }
    });
  });
});


console.log( '>>>> ' + app.getAppPath() )


// window.electronAPI.getAppPath().then(async (appPath: string) => {

//   const appPathClean: string = appPath.replace('app.asar', 'app.asar.unpacked');

//   console.log('>>>', `$HOME/test/node/node-v16.19.1-linux-x64/bin/node ${appPathClean}/main/socket.js`);

//   //await window.electronAPI.runProcessElevated(`$HOME/test/node/node-v16.19.1-linux-x64/bin/node $HOME/test/node/node-v16.19.1-linux-x64/bin/npm install ${appPathClean}/main/`);
//   //await window.electronAPI.runProcessElevated(`$HOME/test/node/node-v16.19.1-linux-x64/bin/node ${appPathClean}/main/src/socket.js`);

//   await window.electronAPI.runProcessElevated(`$HOME/test/node/node-v16.19.1-linux-x64/bin/node $HOME/test/socket/src/socket.js`);

// });

// Modified version of VSCode writeElevated() method 
// https://github.com/microsoft/vscode/blob/main/src/vs/platform/native/electron-main/nativeHostMainService.ts#L491
ipcMain.handle('runProcessElevated', async (event, command: string) => {
  return await util.runProcessElevated(command);
});
