/* tslint:disable */
/* eslint-disable */
import { RequestData } from '../models/request-data';
import { ResponseData } from '../models/response-data';
import { TrafficResult } from '../models/traffic-result';
import { TrafficScopeEnum } from '../models/traffic-scope-enum';
import { TrafficTag } from '../models/traffic-tag';
import { UrlData } from '../models/url-data';
export interface TrafficAtomData {
  ErrorMessage?: string | null;
  RequestData?: RequestData;
  ResponseData?: ResponseData;
  Result?: TrafficResult;
  Scope?: TrafficScopeEnum;
  Tags?: Array<TrafficTag> | null;
  UrlData?: UrlData;
}
