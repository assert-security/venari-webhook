/* tslint:disable */
/* eslint-disable */
import { MatchPosition } from '../models/match-position';
import { ParamDetailedLocation } from '../models/param-detailed-location';
import { ParameterValueType } from '../models/parameter-value-type';
import { QuoteTypeEnum } from '../models/quote-type-enum';
export interface ParameterDetailData {
  Expression?: string | null;
  ExpressionPosition?: MatchPosition;
  HasName?: boolean;
  HasValue?: boolean;
  Location?: ParamDetailedLocation;
  NamePosition?: MatchPosition;
  QuoteType?: QuoteTypeEnum;
  ValuePosition?: MatchPosition;
  ValueType?: ParameterValueType;
}
