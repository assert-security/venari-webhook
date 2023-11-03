/* tslint:disable */
/* eslint-disable */
import { WorkflowType } from '../models/workflow-type';
export interface AttachWorkflowEntry {

  /**
   * Dataset name.
   */
  DatasetName?: string | null;
  Type?: WorkflowType;

  /**
   * Workflow name.
   */
  WorkflowName: string;
}
