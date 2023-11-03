/* tslint:disable */
/* eslint-disable */

/**
 * 0 = JobRunning ()
 * 
 * 1 = JobPaused ()
 * 
 * 2 = JobFailed ()
 * 
 * 3 = JobCompleted ()
 * 
 * 4 = JobAlert ()
 * 
 * 5 = JobFinding ()
 * 
 * 6 = ServerStarted ()
 */
export enum WebHookEventType {
  JobRunning = 0,
  JobPaused = 1,
  JobFailed = 2,
  JobCompleted = 3,
  JobAlert = 4,
  JobFinding = 5,
  ServerStarted = 6
}
