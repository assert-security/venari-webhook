/* tslint:disable */
/* eslint-disable */
import { JobCompletedReason } from '../models/job-completed-reason';
import { JobCounterSummary } from '../models/job-counter-summary';
import { JobStatus } from '../models/job-status';
export interface JobSummary {
  Application?: string | null;
  CompletedReason?: JobCompletedReason;
  Counters?: JobCounterSummary;
  CreatedDate?: string;
  Duration?: string;
  JobId?: string;
  Name?: string | null;
  Properties?: any | null;
  Status?: JobStatus;
}
