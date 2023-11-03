/* tslint:disable */
/* eslint-disable */
import { MatchPosition } from '../models/match-position';
import { NamedPositionData } from '../models/named-position-data';
export interface FormattedSectionMatchResult {
  Depth?: number;
  FoundInSectionID?: string;
  Matches?: Array<MatchPosition> | null;
  Name?: string | null;
  NamedMatches?: Array<NamedPositionData> | null;
}
