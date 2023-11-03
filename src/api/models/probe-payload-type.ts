/* tslint:disable */
/* eslint-disable */

/**
 * 0 = Alphanumeric ()
 * 
 * 1 = SpecialCharactersPrefix ()
 * 
 * 2 = Fragment ()
 * 
 * 3 = Interactive ()
 * 
 * 4 = Framework ()
 * 
 * 5 = ReflectionDetection ()
 * 
 * 6 = InvertMethod ()
 * 
 * 7 = FragmentForceBrowse ()
 */
export enum ProbePayloadType {
  Alphanumeric = 0,
  SpecialCharactersPrefix = 1,
  Fragment = 2,
  Interactive = 3,
  Framework = 4,
  ReflectionDetection = 5,
  InvertMethod = 6,
  FragmentForceBrowse = 7
}
