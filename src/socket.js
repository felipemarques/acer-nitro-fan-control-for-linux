const uuid = require('uuid');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 })

const util = require('util');
const exec = util.promisify(require('child_process').exec);

let clients = {};

function broadcastMessage(json) {
    // We are sending the current data to all connected active clients
    const data = JSON.stringify(json);
    for (let userId in clients) {
        let client = clients[userId];
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    };
}

async function execCommandLine(command, callback) {
    try {
        const { stdout, stderr } = await exec(command);

        if (stderr) {
            console.log('stderr:', stderr);
            throw new Error(stderr)
        }

        typeof (callback) === 'function' ? callback(stdout, stderr) : null;

    } catch (err) {
        //console.error(err);
    }
}

wss.on('connection', (ws) => {

    console.log('on connection >>> ');

    clients[uuid.v4()] = ws;

    ws.on('message', async (data, isBinary) => {
        const commandAction = JSON.parse(data.toString());
        let fanIndex = null;
        let command = null;
        
        if (commandAction.action === 'setCPUFanValue') {
            fanIndex = 0;   
        }

        if (commandAction.action === 'setGPUFanValue') {
            fanIndex = 1;   
        }

        if (commandAction.value === 'auto') {
            command = `nbfc set -f ${fanIndex} -a`;
        } else {
            command = `nbfc set -f ${fanIndex} -s ${commandAction.value}`;
        }

        await execCommandLine(command, (stdout, stderr) => {
            console.log(command);
        });

    });

    ws.on("close", () => {
        console.log('socket finalizado');
    });

});

function nbfcStatus() {

    console.log('>>> nbfcStatus()');

    setInterval(async () => {

        await execCommandLine('cat /var/run/nbfc_service.state.json', (stdout, stderr) => {
            broadcastMessage(JSON.parse(stdout));
        });

    }, 1000);

}

nbfcStatus();

console.log('socket listen on 7071');