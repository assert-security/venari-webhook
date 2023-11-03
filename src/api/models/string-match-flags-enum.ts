/* tslint:disable */
/* eslint-disable */

/**
 * 2 = Contains ()
 * 
 * 4 = StartsWith ()
 * 
 * 8 = EndsWith ()
 * 
 * 16 = Equal ()
 * 
 * 32 = ContainsIgnoreCase ()
 * 
 * 64 = StartsWithIgnoreCase ()
 * 
 * 128 = EndsWithIgnoreCase ()
 * 
 * 256 = EqualIgnoreCase ()
 * 
 * 512 = Multiple ()
 */
export enum StringMatchFlagsEnum {
  Contains = 2,
  StartsWith = 4,
  EndsWith = 8,
  Equal = 16,
  ContainsIgnoreCase = 32,
  StartsWithIgnoreCase = 64,
  EndsWithIgnoreCase = 128,
  EqualIgnoreCase = 256,
  Multiple = 512
}
