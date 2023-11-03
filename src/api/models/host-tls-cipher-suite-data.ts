/* tslint:disable */
/* eslint-disable */
import { TlsCipherSuiteData } from '../models/tls-cipher-suite-data';
import { TlsProtocolVersionEnum } from '../models/tls-protocol-version-enum';
export interface HostTlsCipherSuiteData {
  CipherSuite?: TlsCipherSuiteData;
  Host?: string | null;
  HostPortText?: string | null;
  Port?: number;
  ProtocolVersion?: TlsProtocolVersionEnum;
  TimeStamp?: string;
}
