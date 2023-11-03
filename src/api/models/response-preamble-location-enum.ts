/* tslint:disable */
/* eslint-disable */

/**
 * 0 = Unknown ()
 * 
 * 1 = HttpVersion ()
 * 
 * 2 = StatusCode ()
 * 
 * 3 = StatusDescription ()
 * 
 * 4 = HeaderName ()
 * 
 * 5 = HeaderValue ()
 * 
 * 6 = HeaderSubParameterName ()
 * 
 * 7 = HeaderSubParameterValue ()
 * 
 * 8 = CookieName ()
 * 
 * 9 = CookieValue ()
 */
export enum ResponsePreambleLocationEnum {
  Unknown = 0,
  HttpVersion = 1,
  StatusCode = 2,
  StatusDescription = 3,
  HeaderName = 4,
  HeaderValue = 5,
  HeaderSubParameterName = 6,
  HeaderSubParameterValue = 7,
  CookieName = 8,
  CookieValue = 9
}
