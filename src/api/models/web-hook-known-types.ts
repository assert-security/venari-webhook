/* tslint:disable */
/* eslint-disable */
import { WebHookEvent } from '../models/web-hook-event';
import { WebHookJobAlertEvent } from '../models/web-hook-job-alert-event';
import { WebHookJobCompletedEvent } from '../models/web-hook-job-completed-event';
import { WebHookJobFailedEvent } from '../models/web-hook-job-failed-event';
import { WebHookJobFindingEvent } from '../models/web-hook-job-finding-event';
import { WebHookJobPausedEvent } from '../models/web-hook-job-paused-event';
import { WebHookJobRunningEvent } from '../models/web-hook-job-running-event';
import { WebHookPublicKeyData } from '../models/web-hook-public-key-data';
export interface WebHookKnownTypes {
  webHookEvent?: WebHookEvent;
  webHookJobAlertEvent?: WebHookJobAlertEvent;
  webHookJobCompletedEvent?: WebHookJobCompletedEvent;
  webHookJobFailedEvent?: WebHookJobFailedEvent;
  webHookJobFindingEvent?: WebHookJobFindingEvent;
  webHookJobPausedEvent?: WebHookJobPausedEvent;
  webHookJobRunningEvent?: WebHookJobRunningEvent;
  webHookPublicKey?: WebHookPublicKeyData;
}
