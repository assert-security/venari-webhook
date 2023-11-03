/* tslint:disable */
/* eslint-disable */

/**
 * 0 = PostmanCollection ()
 * 
 * 1 = OpenApiDefinition ()
 * 
 * 2 = FiddlerSAZ ()
 * 
 * 3 = Burp ()
 * 
 * 4 = HAR ()
 * 
 * 5 = AssertXML ()
 * 
 * 6 = Custom ()
 * 
 * 7 = GraphQLSchema ()
 */
export enum TrafficDefinitionSourceType {
  PostmanCollection = 0,
  OpenApiDefinition = 1,
  FiddlerSAZ = 2,
  Burp = 3,
  HAR = 4,
  AssertXML = 5,
  Custom = 6,
  GraphQLSchema = 7
}
