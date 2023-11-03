/* tslint:disable */
/* eslint-disable */
import { TlsCipherSuiteEnum } from '../models/tls-cipher-suite-enum';
export interface TlsCipherSuiteData {
  Bytes?: string | null;
  BytesHex?: string | null;
  D_TLS_OK?: boolean;
  Documents?: Array<string> | null;
  Name?: string | null;
  Recommended?: boolean;
  Suite?: TlsCipherSuiteEnum;
}
