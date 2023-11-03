/* tslint:disable */
/* eslint-disable */
import { AttachWorkflowEntry } from '../models/attach-workflow-entry';
export interface AttachWorkflowsToJobTemplate {

  /**
   * Target workspace name.
   */
  ApplicationName: string;

  /**
   * Workflows to attach.
   */
  AttachWorkflows: Array<AttachWorkflowEntry>;

  /**
   * Job template name.
   */
  Name: string;

  /**
   * Overwrite existing workflows.
   */
  Overwrite?: boolean;
}
