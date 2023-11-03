import express from 'express';

import axios, { AxiosResponse } from 'axios';
import crypto from 'crypto';
import { WebHookEvent } from './api/models/web-hook-event';
import { WebHookEventType } from './api/models/web-hook-event-type';
import { WebHookJobAlertEvent } from './api/models/web-hook-job-alert-event';
import { WebHookJobCompletedEvent } from './api/models/web-hook-job-completed-event';
import { WebHookJobFailedEvent } from './api/models/web-hook-job-failed-event';
import { WebHookJobFindingEvent } from './api/models/web-hook-job-finding-event';
import { WebHookJobPausedEvent } from './api/models/web-hook-job-paused-event';
import { WebHookJobRunningEvent } from './api/models/web-hook-job-running-event';
import { WebHookPublicKeyData } from './api/models/web-hook-public-key-data';
import { WebHookServerStartedEvent } from './api/models/web-hook-server-started-event';
import { ExportedFindingData } from './api/models/exported-finding-data';

const app = express();
app.use(express.json());

const initialize = async () => {

    let publicKey: Buffer;
    app.post('/webhook', async (req, res) => {
        const signatureBase64 = req.headers['x-signature'] as string;
        const evt: WebHookEvent = req.body;

        if (!publicKey || evt.eventType === WebHookEventType.ServerStarted) {
            publicKey = await getPublicKey();
        }

        const hashString = JSON.stringify(evt);

        const hash = Buffer.from(hashString, 'utf-8');
        const signature: Buffer = Buffer.from(signatureBase64, 'base64');
        let succeeded = false;
        try {
            const isvalid = crypto.verify('RSA-SHA256', hash, publicKey, signature)
            if (isvalid) {
                const secret = process.env.VENARI_DEVOPS_WEBHOOK_SECRET;
                const key = crypto.createHash('sha256').update(Buffer.from(secret, 'utf-8')).digest();
                const iv = Buffer.from(evt.base64IV, 'base64');
                const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv); // PKCS#7
                let eventJson = decipher.update(evt.base64EncryptedData, 'base64', 'utf-8');
                eventJson += decipher.final();
                succeeded = await handleEvent(evt.eventType, eventJson);
            }
        }
        catch (error) {
            console.log(error);
        }
        if (succeeded) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Status OK');
        }
        else {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Invalid Request');
        }
    });


    return true;
}

const handleEvent = async (evtType: WebHookEventType, json: string) => {
    const obj = JSON.parse(json);
    switch (evtType) {
        case WebHookEventType.ServerStarted:
            return handleServerStarted(obj);
        case WebHookEventType.JobAlert:
            return handleJobAlert(obj);
        case WebHookEventType.JobCompleted:
            return handleJobCompleted(obj);
        case WebHookEventType.JobFailed:
            return handleJobFailed(obj);
        case WebHookEventType.JobFinding:
            return await handleJobFinding(obj);
        case WebHookEventType.JobPaused:
            return handleJobPaused(obj);
        case WebHookEventType.JobRunning:
            return handleJobRunning(obj);
        default:
            return false;
    }
}

const handleServerStarted = (evt: WebHookServerStartedEvent) => {
    console.log('Server Started');
    console.log(JSON.stringify(evt));
    return true;
}

const handleJobAlert = (evt: WebHookJobAlertEvent) => {
    console.log('Job Alert');
    console.log(JSON.stringify(evt));
    return true;
}

const handleJobCompleted = (evt: WebHookJobCompletedEvent) => {
    console.log('Job Completed');
    console.log(JSON.stringify(evt));
    return true;
}

const handleJobFailed = (evt: WebHookJobFailedEvent) => {
    console.log('Job Failed');
    console.log(JSON.stringify(evt));
    return true;
}

const handleJobFinding = async (evt: WebHookJobFindingEvent) => {
    console.log('Job Finding');
    console.log(JSON.stringify(evt));
    const finding: ExportedFindingData = await getFinding(evt.jobId, evt.findingId);
    if (finding) {
        console.log(JSON.stringify(finding));
    }
    return true;
}

const handleJobPaused = (evt: WebHookJobPausedEvent) => {
    console.log('Job Paused');
    console.log(JSON.stringify(evt));
    return true;
}

const handleJobRunning = (evt: WebHookJobRunningEvent) => {
    console.log('Job Running');
    console.log(JSON.stringify(evt));
    return true;
}

const getPublicKey = async () => {
    let resp: AxiosResponse<any>;
    try {
        const venariUrl = process.env.VENARI_DEVOPS_URL;
        const apiKey = process.env.VENARI_DEVOPS_APIKEY;

        resp = await axios.get(`${venariUrl}/api/devops/nodes/webhookpublickey`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        if (resp.status === 200) {
            const publicKeyObj: WebHookPublicKeyData = resp.data;
            if (publicKeyObj.base64Pkcs1PublicKey) {
                return Buffer.from(publicKeyObj.base64Pkcs1PublicKey, 'utf-8');
            }
        }
    }
    catch (error) {
        console.log(error);
    }
    return null;
}

const getFinding = async (jobId: string, findingId: number) => {
    let finding: ExportedFindingData | null = null;
    let resp: AxiosResponse<any>;
    try {
        const venariUrl = process.env.VENARI_DEVOPS_URL;
        const apiKey = process.env.VENARI_DEVOPS_APIKEY;

        resp = await axios.get(`${venariUrl}/api/devops/findings/get?JobId=${jobId}&findingId=${findingId}`, {
            headers: {
                "x-api-key": apiKey
            }
        });
        if (resp.status === 200) {
            finding = resp.data;
        }
    }
    catch (error) {
        console.log(error);
    }
    return finding;
}

initialize();

export { app };