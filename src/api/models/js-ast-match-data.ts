/* tslint:disable */
/* eslint-disable */
import { CommentDetails } from '../models/comment-details';
import { JsAstNodeEnum } from '../models/js-ast-node-enum';
import { JsBreakoutData } from '../models/js-breakout-data';
import { MatchPosition } from '../models/match-position';
import { QuoteTypeEnum } from '../models/quote-type-enum';
export interface JsAstMatchData {
  AncestorAstNodes?: Array<JsAstNodeEnum> | null;
  Breakout?: JsBreakoutData;
  FoundInAstNode?: JsAstNodeEnum;
  FoundInComment?: CommentDetails;
  HasNewLineAfterMatch?: boolean;
  IsSingleLineCodeFragment?: boolean | null;
  IsSingleLineJS?: boolean;
  Position?: MatchPosition;
  QuoteType?: QuoteTypeEnum;
}
