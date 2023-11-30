import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

import util from './helpers/util';
import isElevated from 'native-is-elevated';
import fixPath from 'fix-path';

// Ensure Electron apps subprocess on macOS and Linux inherit system $PATH
fixPath();

const isProd = process.env.NODE_ENV === 'production'

console.log('>>>>>>>>>>>>> isProd: ', isProd)

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  try {
    await util.runProcessElevated(app.getAppPath() + '/main/bin/nbfc status -a && echo 1');
  } catch (e) {
    await util.runProcessElevated(app.getAppPath() + '/main/bin/nbfc start &');
  }

  console.log('app.path ==>> ', app.getAppPath())
  // console.log('app.getGPUInfo ==>> ', await app.getGPUInfo('complete'))
  

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
