/* tslint:disable */
/* eslint-disable */
import { MatchWebRuleResult } from '../models/match-web-rule-result';
import { VariableData } from '../models/variable-data';
export interface MatchWebRuleResults {
  ConditionalVariables?: Array<VariableData> | null;
  ErrorMessages?: Array<string> | null;
  Matches?: Array<MatchWebRuleResult> | null;
}
