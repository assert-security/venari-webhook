/* tslint:disable */
/* eslint-disable */

/**
 * 0 = DisableContentSecurityPolicy ()
 * 
 * 1 = DeferrAnalysisItemsToFinish ()
 * 
 * 2 = ConfirmAtFinish ()
 * 
 * 3 = SkipTrafficFromBrowser ()
 * 
 * 4 = FuzzParametersSimulataneously ()
 */
export enum RuleBehaviorEnum {
  DisableContentSecurityPolicy = 0,
  DeferrAnalysisItemsToFinish = 1,
  ConfirmAtFinish = 2,
  SkipTrafficFromBrowser = 3,
  FuzzParametersSimulataneously = 4
}
