/* tslint:disable */
/* eslint-disable */
import { EncodingTypeEnum } from '../models/encoding-type-enum';
import { ParameterDetailData } from '../models/parameter-detail-data';
import { ParameterFormat } from '../models/parameter-format';
import { ParamLocation } from '../models/param-location';
import { ParamType } from '../models/param-type';
import { RequestFuzzTargetData } from '../models/request-fuzz-target-data';
import { StructuredContentTypeEnum } from '../models/structured-content-type-enum';
import { UpdateLocationMethodEnum } from '../models/update-location-method-enum';
export interface FuzzParameterData {
  ActionIndex?: number | null;
  AdditionalParameters?: Array<FuzzParameterData> | null;
  AtomIndex?: number;
  ContentType?: string | null;
  DetailData?: ParameterDetailData;
  DisableNameFiltering?: boolean;
  EncodingType?: EncodingTypeEnum;
  ExtraTargets?: Array<RequestFuzzTargetData> | null;
  Format?: ParameterFormat;
  InvertMethod?: boolean;
  IsArrayItem?: boolean;
  IsLeaf?: boolean | null;
  Location?: ParamLocation;
  Method?: string | null;
  Name?: string | null;
  NewValue?: string | null;
  OriginalValue?: string | null;
  ParentPosition?: number | null;
  ParentValue?: string | null;
  Position?: number;
  ReplacePattern?: string | null;
  StructurePath?: string | null;
  StructurePathWithoutPositions?: string | null;
  TrafficReflectionContentType?: StructuredContentTypeEnum;
  Type?: ParamType;
  UpdateLocationMethod?: UpdateLocationMethodEnum;
  Url?: string | null;
  Value?: string | null;
}
