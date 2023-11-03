/* tslint:disable */
/* eslint-disable */
import { MatchPosition } from '../models/match-position';
import { ResponsePreambleLocationEnum } from '../models/response-preamble-location-enum';
export interface ResponsePreambleLocationMetaData {
  Location?: ResponsePreambleLocationEnum;
  TextPosition?: MatchPosition;
}
