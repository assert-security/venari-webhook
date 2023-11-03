/* tslint:disable */
/* eslint-disable */
import { JsContainerTypeEnum } from '../models/js-container-type-enum';
import { StringMatchFlagsEnum } from '../models/string-match-flags-enum';
export interface JsSimpleMatchData {
  ContainedText?: string | null;
  ContainerType?: JsContainerTypeEnum;
  MatchFlags?: StringMatchFlagsEnum;
}
