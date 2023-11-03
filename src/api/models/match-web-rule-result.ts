/* tslint:disable */
/* eslint-disable */
import { ConsoleMessageData } from '../models/console-message-data';
import { CveItem } from '../models/cve-item';
import { MatchPosition } from '../models/match-position';
import { MatchWebRuleResults } from '../models/match-web-rule-results';
import { NamedPositionData } from '../models/named-position-data';
import { TrafficMatchResult } from '../models/traffic-match-result';
export interface MatchWebRuleResult {
  AtomIndex?: number;
  AttackMatches?: MatchWebRuleResults;
  CPE?: string | null;
  CVEItems?: Array<CveItem> | null;
  ConsoleMessage?: ConsoleMessageData;
  DocumentHtml?: string | null;
  DocumentLocation?: string | null;
  DocumentMatches?: Array<MatchPosition> | null;
  DocumentNamedPositions?: Array<NamedPositionData> | null;
  MatchResult?: TrafficMatchResult;
  ScreenshotBase64?: string | null;
}
