/* tslint:disable */
/* eslint-disable */
import { TrafficTag } from '../models/traffic-tag';
export interface RequestMetaData {

  /**
   * The time when the last request bytes were sent.
   */
  EndedAt?: string | null;

  /**
   * The time when the first request bytes were sent.
   */
  StartedAt?: string | null;
  Tags?: Array<TrafficTag> | null;
}
