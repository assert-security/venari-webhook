/* tslint:disable */
/* eslint-disable */

/**
 * The result of a job template connectivity request.
 */
export interface ConnectivityTestResult {

  /**
   * Name of application this result is for.
   */
  ApplicationName?: string | null;

  /**
   * The error message, if any, returned by the web server being tested.
   */
  ErrorMessage?: string | null;

  /**
   * The HTTP status code returned from the test.
   */
  HttpStatusCode?: number;

  /**
   * Property indicating the connectivty test succeeded or not.
   */
  Success?: boolean;

  /**
   * Name of the template this result is for.
   */
  TemplateName?: string | null;

  /**
   * The url that failed the connectivity test.
   */
  Url?: string | null;
}
