/* tslint:disable */
/* eslint-disable */
import { ExportedBrowserMatchData } from '../models/exported-browser-match-data';
import { ExportedTrafficMatchData } from '../models/exported-traffic-match-data';
import { ReflectionTypeEnum } from '../models/reflection-type-enum';
export interface ExportedReflectionData {
  BrowserMatch?: ExportedBrowserMatchData;
  DisplayName?: string | null;
  FoundBy?: string | null;
  InvertMethod?: boolean;
  IsInteractiveProbe?: boolean;
  IsRedirect?: boolean;
  Method?: string | null;
  ParameterName?: string | null;
  ProbeGroupID?: string | null;
  ReflectedHtmlLocation?: string | null;
  ReflectedHttpLocation?: string | null;
  ReflectionType?: ReflectionTypeEnum;
  TrafficSequenceMatch?: ExportedTrafficMatchData;
  Value?: string | null;
  WorkflowUniqueID?: string | null;
}
