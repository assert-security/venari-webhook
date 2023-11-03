/* tslint:disable */
/* eslint-disable */

/**
 * 0 = SingleQuotes ()
 * 
 * 1 = DoubleQuotes ()
 * 
 * 2 = ParenPair ()
 * 
 * 3 = SquareBracketPair ()
 * 
 * 4 = ParenSingleQuotePair ()
 * 
 * 5 = ParenDoubleQuotePair ()
 * 
 * 6 = SquareBracketSingleQuotePair ()
 * 
 * 7 = SquareBracketDoubleQuotePair ()
 * 
 * 8 = SlashStarComment ()
 * 
 * 9 = HtmlComment ()
 */
export enum JsContainerTypeEnum {
  SingleQuotes = 0,
  DoubleQuotes = 1,
  ParenPair = 2,
  SquareBracketPair = 3,
  ParenSingleQuotePair = 4,
  ParenDoubleQuotePair = 5,
  SquareBracketSingleQuotePair = 6,
  SquareBracketDoubleQuotePair = 7,
  SlashStarComment = 8,
  HtmlComment = 9
}
