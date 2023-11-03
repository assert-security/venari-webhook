/* tslint:disable */
/* eslint-disable */
import { JobLabelData } from '../models/job-label-data';
export interface CreateJobRequest {
  ApplicationName?: string | null;
  JobName?: string | null;
  JobTemplateName?: string | null;
  Labels?: Array<JobLabelData> | null;
}
