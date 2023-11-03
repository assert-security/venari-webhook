import { app } from './main'
import { AddressInfo } from 'net'
import https from 'https'
import http from 'http'
import * as fs from 'fs'

const PORT = process.env.PORT || 5000;
const initialize = () => {
    console.log('Initializing express server...');

    if (!process.env.VENARI_DEVOPS_WEBHOOK_SECRET) {
        console.log('Missing environment variable VENARI_DEVOPS_WEBHOOK_SECRET')
        return;
    }
    if (!process.env.VENARI_DEVOPS_URL) {
        console.log('Missing environment variable VENARI_DEVOPS_URL')
        return;
    }
    if (!process.env.VENARI_DEVOPS_APIKEY) {
        console.log('Missing environment variable VENARI_DEVOPS_APIKEY')
        return;
    }
    const p = PORT;
    if (p === '443' || p === '8443') {
        const bundleFile = process.env.bundleFile;
        const pemFile = process.env.pemFile;
        const crtFile = process.env.crtFile;
        if (!bundleFile || !pemFile || !crtFile) {
            console.log("Missing SSL configuration.");
        }
        else if (!fs.existsSync(bundleFile)
            || !fs.existsSync(pemFile)
            || !fs.existsSync(crtFile)) {
            console.log("Missing SSL configuration.");
        }
        else {
            const options = {
                cert: fs.readFileSync(crtFile, 'utf8'),
                key: fs.readFileSync(pemFile, 'utf8'),
                ca: fs.readFileSync(bundleFile, 'utf8')
            };
            const httpsServer = https.createServer(options, app).listen(+p, () => {
                const { port, address } = httpsServer.address() as AddressInfo;
                console.log('Server listening on:', 'https://' + address + ':' + port);
            });
        }
    }
    else {
        if (p === "passenger") {
            console.log('Detected Phusion Passenger. Starting with random port...');
            const httpServer = http.createServer(app).listen(() => {
                const { port, address } = httpServer.address() as AddressInfo;
                console.log('Server listening on:', 'http://' + address + ':' + port);
            });
        }
        else {
            const httpServer = http.createServer(app).listen(p, () => {
                const { port, address } = httpServer.address() as AddressInfo;
                console.log('Server listening on:', 'http://' + address + ':' + port);
            });
        }
    }
}

initialize();
