/* tslint:disable */
/* eslint-disable */
import { TlsProtocolVersionEnum } from '../models/tls-protocol-version-enum';
export interface HostTlsProtocolVersionData {
  Host?: string | null;
  HostPortText?: string | null;
  Port?: number;
  ProtocolVersion?: TlsProtocolVersionEnum;
  TimeStamp?: string;
}
