/* tslint:disable */
/* eslint-disable */
import { CommentSource } from '../models/comment-source';
import { MatchPosition } from '../models/match-position';
import { UrlData } from '../models/url-data';
export interface CommentData {
  InnerText?: string | null;
  Position?: MatchPosition;
  Prefix?: string | null;
  SourceContentType?: CommentSource;
  SourceURL?: UrlData;
  Suffix?: string | null;
  SummaryText?: string | null;
}
