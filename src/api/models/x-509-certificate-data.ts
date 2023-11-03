/* tslint:disable */
/* eslint-disable */
export interface X509CertificateData {
  Begins?: string;
  Expires?: string;
  IssuerDN?: string | null;
  IssuerParts?: Array<string> | null;
  Name?: string | null;
  RawData?: string | null;
  SerialNumber?: string | null;
  SignatureAlgorithm?: string | null;
  SubjectAlternateNames?: Array<string> | null;
  SubjectDN?: string | null;
  SubjectParts?: Array<string> | null;
  ThumbPrint?: string | null;
  Version?: number;
}
