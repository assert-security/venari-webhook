/* tslint:disable */
/* eslint-disable */
import { FormattedSectionMatchResult } from '../models/formatted-section-match-result';
import { MatchPosition } from '../models/match-position';
import { NamedMatchData } from '../models/named-match-data';
import { NamedPositionData } from '../models/named-position-data';
export interface TrafficMatchResult {
  FormattedRequestMatches?: Array<FormattedSectionMatchResult> | null;
  FormattedResponseMatches?: Array<FormattedSectionMatchResult> | null;
  Matched?: boolean;
  NamedMatchData?: NamedMatchData;
  RequestMatches?: Array<MatchPosition> | null;
  RequestNamedMatches?: Array<NamedPositionData> | null;
  ResponseMatches?: Array<MatchPosition> | null;
  ResponseNamedMatches?: Array<NamedPositionData> | null;
  UrlMatches?: Array<MatchPosition> | null;
  UrlNamedMatches?: Array<NamedPositionData> | null;
}
