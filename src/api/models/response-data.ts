/* tslint:disable */
/* eslint-disable */
import { ResponseMetaData } from '../models/response-meta-data';
export interface ResponseData {
  BodyStartIndex?: number;
  Bytes?: string | null;
  Charset?: string | null;
  ContentLength?: number;
  ContentType?: string | null;
  MetaData?: ResponseMetaData;
  ParserInterfaceName?: string | null;
  /** @deprecated */PlainBytes?: string | null;
  StatusCode?: string | null;
}
