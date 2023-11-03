/* tslint:disable */
/* eslint-disable */
import { ProbeMatchData } from '../models/probe-match-data';
import { StructuredContentTypeEnum } from '../models/structured-content-type-enum';
export interface ExportedBrowserMatchData {
  CurrentActionIndex?: number | null;
  DocumentLocation?: string | null;
  Match?: ProbeMatchData;
  TrafficHtmlMatch?: ProbeMatchData;
  TrafficReflectionContentType?: StructuredContentTypeEnum;
}
