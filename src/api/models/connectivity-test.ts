/* tslint:disable */
/* eslint-disable */
export interface ConnectivityTest {

  /**
   * The name of the application that contains the job template.
   */
  ApplicationName: string;
  HttpStatusCode?: number | null;
  IgnoreCertificateErrors?: boolean | null;
  SearchText?: string | null;

  /**
   * Name of the job templates containing the start urls that need to be tested.
   */
  TemplateName: string;
  TimeoutSeconds?: number | null;
}
