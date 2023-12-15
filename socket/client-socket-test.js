const WebSocket = require('ws');

let connections = 0;
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 

async function wsConnect() {

    const ws = new WebSocket('ws://localhost:7071');

    ws.on('error', async (e) => {
        console.error(e.message);
    });

    ws.on('close', async (e) => {
        console.error(e.message);
        await delay(1000);
        await wsConnect();
    });

    ws.on('open', function open() {
        console.log('connected')
        // ws.send(JSON.stringify({
        //     'action': 'setCPUFanValue',
        //     'value': 'auto'
        // }));
    });

    ws.on('message', function message(data) {
        console.log(JSON.parse(data));
    });

    connections++;

    console.log('exec wsConnect() ...' + connections);
}

(async () => {
    try {
        await wsConnect();
    } catch(e) {
        await wsConnect();
    }
})();


