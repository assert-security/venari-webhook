/* tslint:disable */
/* eslint-disable */
import { WebHookEventType } from '../models/web-hook-event-type';
export interface WebHookEvent {
  base64EncryptedData?: string | null;
  base64IV?: string | null;
  eventDate?: string;
  eventType?: WebHookEventType;
}
