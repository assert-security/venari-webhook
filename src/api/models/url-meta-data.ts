/* tslint:disable */
/* eslint-disable */
import { TrafficTag } from '../models/traffic-tag';
import { UrlFormat } from '../models/url-format';
import { UrlFunction } from '../models/url-function';
import { UrlOrigin } from '../models/url-origin';
import { UrlParseLocations } from '../models/url-parse-locations';
export interface UrlMetaData {
  Attribute?: string | null;
  Element?: string | null;
  Format?: UrlFormat;
  Fragment?: string | null;
  FullUrl?: string | null;
  Function?: UrlFunction;
  HighConfidenceDiscovery?: boolean | null;
  Method?: string | null;
  Origin?: UrlOrigin;
  ParseLocations?: UrlParseLocations;
  PlainUrl?: string | null;
  PropertyName?: string | null;
  Tags?: Array<TrafficTag> | null;
}
