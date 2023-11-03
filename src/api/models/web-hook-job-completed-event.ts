/* tslint:disable */
/* eslint-disable */
export interface WebHookJobCompletedEvent {
  applicationName?: string | null;
  criticalFound?: number;
  highFound?: number;
  informationalFound?: number;
  jobCompletedDate?: string;
  jobId?: string | null;
  jobName?: string | null;
  jobStartDate?: string;
  jobTemplateName?: string | null;
  lowFound?: number;
  mediumFound?: number;
  startUrl?: string | null;
}
