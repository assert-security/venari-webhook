/* tslint:disable */
/* eslint-disable */
import { TrafficTag } from '../models/traffic-tag';
export interface ResponseMetaData {
  EndedAt?: string | null;
  Extension?: string | null;
  MeasuredTimeToFirstByteMs?: number | null;
  StartedAt?: string | null;
  Tags?: Array<TrafficTag> | null;
  Url?: string | null;
}
