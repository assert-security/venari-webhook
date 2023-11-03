/* tslint:disable */
/* eslint-disable */
import { TrafficDefinitionSourceFileArchiveData } from '../models/traffic-definition-source-file-archive-data';
import { TrafficDefinitionSourceOrigin } from '../models/traffic-definition-source-origin';
import { TrafficDefinitionSourceType } from '../models/traffic-definition-source-type';
export interface TrafficDefinitionSourceData {
  Description?: string | null;
  FileContentsData?: TrafficDefinitionSourceFileArchiveData;
  Name?: string | null;
  OperationsHash?: string;
  Origin?: TrafficDefinitionSourceOrigin;
  SourceDataJsonGZipped?: string | null;
  SourceGroupID?: number;
  Type?: TrafficDefinitionSourceType;
}
