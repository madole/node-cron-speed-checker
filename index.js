const speedTest = require('speedtest-net');
const cron = require('node-cron');
require('isomorphic-fetch');

function runSpeedTest() {
    const test = speedTest({maxTime: 5000});
    
    test.on('data', data => {
        console.dir(data);
        const meta = {
            client: data.client,
            server: data.server
        };
        const queryString = `value1=${data.speeds.download}&value2=${data.speeds.upload}&value3=${JSON.stringify(meta)}`;
        const key = process.env.IFTTT_KEY;
        fetch(`https://maker.ifttt.com/trigger/speed-test/with/key/${key}/?${queryString}`);
    });
    
    test.on('error', err => {
        console.error(err);
    });
}

runSpeedTest();
cron.schedule('0 * * * *', runSpeedTest);

