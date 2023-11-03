/* tslint:disable */
/* eslint-disable */
import { X509CertificateData } from '../models/x-509-certificate-data';
export interface HostCertificateData {
  Certificate?: X509CertificateData;
  Host?: string | null;
  HostPortText?: string | null;
  Port?: number;
  TimeStamp?: string;
}
