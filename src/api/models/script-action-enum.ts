/* tslint:disable */
/* eslint-disable */

/**
 * 0 = Navigate ()
 * 
 * 1 = Click ()
 * 
 * 2 = SendText ()
 * 
 * 3 = SelectOption ()
 * 
 * 4 = WaitForContent ()
 * 
 * 5 = FindTextInputs ()
 * 
 * 6 = FindPasswords ()
 * 
 * 7 = FindSelects ()
 * 
 * 8 = FindCheckboxes ()
 * 
 * 9 = FindRadioButtons ()
 * 
 * 10 = Snapshot ()
 * 
 * 11 = ResetState ()
 * 
 * 12 = Wait ()
 * 
 * 13 = AutoLogin ()
 * 
 * 14 = SendKeyCodes ()
 * 
 * 15 = ToggleCheckboxes ()
 * 
 * 16 = ToggleRadioButtons ()
 * 
 * 17 = RunWorkflow ()
 * 
 * 18 = CustomDisplay ()
 * 
 * 19 = SelectOptionIndex ()
 * 
 * 20 = Hover ()
 * 
 * 21 = GoBack ()
 * 
 * 22 = GoForward ()
 * 
 * 23 = FindElementByCSSSelector ()
 * 
 * 24 = FindElementsByCSSSelector ()
 * 
 * 25 = FindElementByXPath ()
 * 
 * 26 = FindElementsByXPath ()
 * 
 * 27 = ActionSkipped ()
 * 
 * 28 = HttpRequest ()
 * 
 * 29 = ExecuteScript ()
 * 
 * 30 = LaunchBrowser ()
 * 
 * 31 = ReadEmail ()
 */
export enum ScriptActionEnum {
  Navigate = 0,
  Click = 1,
  SendText = 2,
  SelectOption = 3,
  WaitForContent = 4,
  FindTextInputs = 5,
  FindPasswords = 6,
  FindSelects = 7,
  FindCheckboxes = 8,
  FindRadioButtons = 9,
  Snapshot = 10,
  ResetState = 11,
  Wait = 12,
  AutoLogin = 13,
  SendKeyCodes = 14,
  ToggleCheckboxes = 15,
  ToggleRadioButtons = 16,
  RunWorkflow = 17,
  CustomDisplay = 18,
  SelectOptionIndex = 19,
  Hover = 20,
  GoBack = 21,
  GoForward = 22,
  FindElementByCSSSelector = 23,
  FindElementsByCSSSelector = 24,
  FindElementByXPath = 25,
  FindElementsByXPath = 26,
  ActionSkipped = 27,
  HttpRequest = 28,
  ExecuteScript = 29,
  LaunchBrowser = 30,
  ReadEmail = 31
}
