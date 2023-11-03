/* tslint:disable */
/* eslint-disable */
import { AutoLoginCredentials } from '../models/auto-login-credentials';
import { WorkflowParameter } from '../models/workflow-parameter';
export interface ImportJobTemplateRequest {

  /**
   * Target workspace name.
   */
  ApplicationName: string;
  AutoLoginCredentials?: AutoLoginCredentials;

  /**
   * The node that will own the job. If not specified, the first available node will be used.
   */
  JobOwner?: string | null;

  /**
   * The maximum number of elastic nodes to use. If omitted, templates values are used. If 0, elastic scanning is disabled.
   */
  MaxElasticScanNodeCount?: number | null;
  Name: string;

  /**
   * The start urls to scan.
   */
  StartUrls?: Array<string> | null;

  /**
   * The text of the template being imported.
   */
  Template: string;

  /**
   * Upload scan details to master database when scan completes. Defaults to true.
   */
  UploadDetailToMaster?: boolean | null;

  /**
   * Overrides the origin of all StartUrls.
   */
  UrlOrigin?: string | null;
  WorkflowParameters?: Array<WorkflowParameter> | null;
}
