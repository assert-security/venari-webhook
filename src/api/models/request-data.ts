/* tslint:disable */
/* eslint-disable */
import { RequestMetaData } from '../models/request-meta-data';
export interface RequestData {
  BodyStartIndex?: number;
  Bytes?: string | null;
  Charset?: string | null;
  MetaData?: RequestMetaData;
  ParserInterfaceName?: string | null;
}
