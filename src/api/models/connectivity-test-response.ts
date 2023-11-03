/* tslint:disable */
/* eslint-disable */
import { ConnectivityTestResult } from '../models/connectivity-test-result';
export interface ConnectivityTestResponse {

  /**
   * Flag indicating success for all urls
   */
  AllSucceeded?: boolean;

  /**
   * The result of all urls that were requested.
   */
  Results?: Array<ConnectivityTestResult> | null;
}
