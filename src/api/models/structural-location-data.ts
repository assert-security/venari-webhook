/* tslint:disable */
/* eslint-disable */
import { DomLocationMetaData } from '../models/dom-location-meta-data';
import { MatchPosition } from '../models/match-position';
import { ResponsePreambleLocationMetaData } from '../models/response-preamble-location-meta-data';
import { StructuredContentTypeEnum } from '../models/structured-content-type-enum';
export interface StructuralLocationData {
  DomLocation?: DomLocationMetaData;
  PreambleLocationData?: ResponsePreambleLocationMetaData;
  StructuredContentType?: StructuredContentTypeEnum;
  TextPosition?: MatchPosition;
}
