/* tslint:disable */
/* eslint-disable */

/**
 * 0 = JobFinished ()
 * 
 * 1 = PartialTimeLimit ()
 * 
 * 2 = PartialUserInitiated ()
 */
export enum JobCompletedReason {
  JobFinished = 0,
  PartialTimeLimit = 1,
  PartialUserInitiated = 2
}
