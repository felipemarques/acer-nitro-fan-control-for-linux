const WebSocket = require('ws');
const { argv } = require('node:process');
const ws = new WebSocket('ws://localhost:7071');

const commands = JSON.parse(argv[2]) || [
    {
        'action': 'setCPUFanValue',
        'value': '100'
    },
    {
        'action': 'setGPUFanValue',
        'value': '100'
    }
];

ws.on('error', async (e) => {
    console.error(e.message);
});

ws.on('open', async function open() {
    console.log('connected');

    ws.send(JSON.stringify(commands));

    process.exit(0)
});