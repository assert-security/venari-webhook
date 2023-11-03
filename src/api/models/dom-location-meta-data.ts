/* tslint:disable */
/* eslint-disable */
import { DomLocationEnum } from '../models/dom-location-enum';
import { ElementInnerTextMatchMetaData } from '../models/element-inner-text-match-meta-data';
import { JsAstMatchData } from '../models/js-ast-match-data';
import { JsSimpleMatchData } from '../models/js-simple-match-data';
import { MatchPosition } from '../models/match-position';
import { QuoteTypeEnum } from '../models/quote-type-enum';
import { StringMatchFlagsEnum } from '../models/string-match-flags-enum';
export interface DomLocationMetaData {
  AttributeName?: string | null;
  AttributeValue?: string | null;
  ContainingElementName?: string | null;
  DomIsPlainText?: boolean;
  ElementInnerTextMatchData?: ElementInnerTextMatchMetaData;
  JsAstMatch?: JsAstMatchData;
  JsSimpleMatch?: JsSimpleMatchData;
  Location?: DomLocationEnum;
  MatchFlags?: StringMatchFlagsEnum;
  NodeName?: string | null;
  QuoteType?: QuoteTypeEnum;
  TextPosition?: MatchPosition;
}
