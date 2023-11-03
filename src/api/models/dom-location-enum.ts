/* tslint:disable */
/* eslint-disable */

/**
 * 0 = FullDOM ()
 * 
 * 1 = Comment ()
 * 
 * 2 = Text ()
 * 
 * 3 = AttributeName ()
 * 
 * 4 = AttributeValue ()
 * 
 * 5 = ElementDirectInnerText ()
 * 
 * 6 = ElementOuterHTML ()
 * 
 * 7 = StartTag ()
 * 
 * 8 = EndTag ()
 * 
 * 9 = SelfClosingTag ()
 * 
 * 10 = NotResolved ()
 */
export enum DomLocationEnum {
  FullDOM = 0,
  Comment = 1,
  Text = 2,
  AttributeName = 3,
  AttributeValue = 4,
  ElementDirectInnerText = 5,
  ElementOuterHTML = 6,
  StartTag = 7,
  EndTag = 8,
  SelfClosingTag = 9,
  NotResolved = 10
}
