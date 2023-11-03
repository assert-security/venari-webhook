/* tslint:disable */
/* eslint-disable */

/**
 * 0 = Ready ()
 * 
 * 1 = Acquired ()
 * 
 * 2 = Running ()
 * 
 * 3 = Paused ()
 * 
 * 4 = Completed ()
 * 
 * 5 = Resume ()
 * 
 * 6 = Failed ()
 * 
 * 7 = Cancelled ()
 * 
 * 8 = Pausing ()
 * 
 * 9 = Completing ()
 * 
 * 10 = Failing ()
 * 
 * 11 = Rescan ()
 * 
 * 12 = Assigning ()
 * 
 * 13 = Upload ()
 * 
 * 14 = Uploading ()
 */
export enum JobStatus {
  Ready = 0,
  Acquired = 1,
  Running = 2,
  Paused = 3,
  Completed = 4,
  Resume = 5,
  Failed = 6,
  Cancelled = 7,
  Pausing = 8,
  Completing = 9,
  Failing = 10,
  Rescan = 11,
  Assigning = 12,
  Upload = 13,
  Uploading = 14
}
