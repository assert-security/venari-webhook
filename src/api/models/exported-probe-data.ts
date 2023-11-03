/* tslint:disable */
/* eslint-disable */
import { ExportedProbeBrowserData } from '../models/exported-probe-browser-data';
import { ExportedTrafficMatchData } from '../models/exported-traffic-match-data';
import { ProbePayloadType } from '../models/probe-payload-type';
import { ProbeTypeEnum } from '../models/probe-type-enum';
export interface ExportedProbeData {
  BrowserInfo?: ExportedProbeBrowserData;
  DisplayName?: string | null;
  InjectedBy?: string | null;
  Payload?: string | null;
  PayloadType?: ProbePayloadType;
  Prefix?: string | null;
  ProbeGroupID?: string | null;
  ProbeType?: ProbeTypeEnum;
  TrafficMatch?: ExportedTrafficMatchData;
  Value?: string | null;
}
