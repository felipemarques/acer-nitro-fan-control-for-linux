// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

function setupButton(btn: HTMLElement, method: Function, command: string) {
  try {
    const btnElement = btn as HTMLButtonElement;
    btnElement.addEventListener('click', function (e) {
      btnElement.disabled = true;
      method(command).then((output: any) => {
        btnElement.disabled = false;
        window.alert(output);
      }).catch((error: any) => {
        btnElement.disabled = false;
        window.alert(error);
      });
    });
  } catch (e: any) {
    console.error(e)
  }
}

setupButton(document.getElementById('runProcessBtn'), window.electronAPI.runProcess, 'whoami');
setupButton(document.getElementById('runProcessElevatedBtn'), window.electronAPI.runProcessElevated, 'whoami');

setupButton(document.getElementById('whichNode'), window.electronAPI.runProcess, 'which node');




setupButton(document.getElementById('nbfcStart'), window.electronAPI.runProcessElevated, 'nbfc start');
setupButton(document.getElementById('nbfcStop'), window.electronAPI.runProcessElevated, 'nbfc stop');
setupButton(document.getElementById('nbfcStatus'), window.electronAPI.runProcessElevated, 'nbfc status -a');

setupButton(document.getElementById('nbfcCPUFan100'), window.electronAPI.runProcessElevated, 'nbfc set -f 0 -s 100 && sleep 2 && echo 200');
setupButton(document.getElementById('nbfcGPUFan100'), window.electronAPI.runProcessElevated, 'nbfc set -f 1 -s 100 && sleep 2 && echo 200');

setupButton(document.getElementById('nbfcCPUFanAuto'), window.electronAPI.runProcessElevated, 'nbfc set -f 0 -a && sleep 2 && echo 200');
setupButton(document.getElementById('nbfcGPUFanAuto'), window.electronAPI.runProcessElevated, 'nbfc set -f 1 -a && sleep 2 && echo 200');

let ws: any = null;

function el(id: string) {
  return document.getElementById(id);
}

function elValue(el: any) {
  if (el) {
    return el.value;
  }

  return '';
}

document.getElementById('setCPUFanValue').onclick = async () => {

  ws.send(JSON.stringify({
    action: 'setCPUFanValue',
    value: elValue(el('CPUfanPercent'))
  }));

};

document.getElementById('setGPUFanValue').onclick = async () => {

  ws.send(JSON.stringify({
    action: 'setGPUFanValue',
    value: elValue(el('GPUfanPercent'))
  }));


};

async function startConnection() {

  await connectToServer();

  console.log('conectado no socket...');

  ws.onmessage = (message: string) => {
    //console.log(message);
  };

}

startConnection();

document.getElementById('connectSocket').onclick = async () => {
  await startConnection();
};

async function connectToServer() {
  ws = new WebSocket('ws://localhost:7071/ws');
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      if (ws.readyState === 1) {
        clearInterval(timer)
        resolve(ws);
      }
    }, 10);
  });
}

// window.electronAPI.getAppPath().then(async (appPath: string) => {

//   const appPathClean: string = appPath.replace('app.asar', 'app.asar.unpacked');

//   console.log('>>>', `$HOME/test/node/node-v16.19.1-linux-x64/bin/node ${appPathClean}/main/socket.js`);

//   //await window.electronAPI.runProcessElevated(`$HOME/test/node/node-v16.19.1-linux-x64/bin/node $HOME/test/node/node-v16.19.1-linux-x64/bin/npm install ${appPathClean}/main/`);
//   //await window.electronAPI.runProcessElevated(`$HOME/test/node/node-v16.19.1-linux-x64/bin/node ${appPathClean}/main/src/socket.js`);

//   await window.electronAPI.runProcessElevated(`$HOME/test/node/node-v16.19.1-linux-x64/bin/node $HOME/test/socket/src/socket.js`);

// });


window.electronAPI.getAppPath().then((appPath: string) => {
  const appPathClean: string = appPath.replace('app.asar', 'app.asar.unpacked');
  //const nodeBin = appPathClean + '/main/assets/bin/node-v16.19.1-linux-x64/bin/node';
  const nodeBin = `$HOME/test/node/node-v16.19.1-linux-x64/bin/node`

  el('imageBackground1').setAttribute('src', `file:///${appPathClean}/main/src/assets/metal01.jpg`);
  el('imageBackground2').setAttribute('src', `file:///${appPathClean}/main/src/assets/metal02.jpg`);

  console.log(`${nodeBin} "${appPathClean}/main/cli.js" --path ~/`);
  
  setupButton(document.getElementById('runProcessNodeBtn'), window.electronAPI.runProcess, `${nodeBin} "${appPathClean}/main/cli.js" --path ~/`);
  setupButton(document.getElementById('runProcessNodeElevatedBtn'), window.electronAPI.runProcessElevated, `${nodeBin} "${appPathClean}/main/cli.js" --path ~/`);;
  setupButton(document.getElementById('runProcessNodeElevatedSocket'), window.electronAPI.runProcessElevated, `${nodeBin} "${appPathClean}/main/cli.js" --path ~/`);;
});
