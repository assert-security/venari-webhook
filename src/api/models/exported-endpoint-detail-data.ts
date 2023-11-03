/* tslint:disable */
/* eslint-disable */
import { FingerprintedEndPointData } from '../models/fingerprinted-end-point-data';
import { HostCertificateData } from '../models/host-certificate-data';
import { HostSsl2CipherSuiteData } from '../models/host-ssl-2-cipher-suite-data';
import { HostTlsCipherSuiteData } from '../models/host-tls-cipher-suite-data';
import { HostTlsProtocolVersionData } from '../models/host-tls-protocol-version-data';
import { ServerData } from '../models/server-data';
export interface ExportedEndpointDetailData {
  Certificates?: Array<HostCertificateData> | null;
  Endpoint?: FingerprintedEndPointData;
  Protocols?: Array<HostTlsProtocolVersionData> | null;
  SSLV2Ciphers?: Array<HostSsl2CipherSuiteData> | null;
  TLSCiphers?: Array<HostTlsCipherSuiteData> | null;
  WebServers?: Array<ServerData> | null;
}
