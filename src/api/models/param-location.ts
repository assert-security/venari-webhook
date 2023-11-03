/* tslint:disable */
/* eslint-disable */

/**
 * 0 = Undesignated ()
 * 
 * 1 = Custom ()
 * 
 * 2 = QueryString ()
 * 
 * 3 = Directory ()
 * 
 * 4 = Path ()
 * 
 * 5 = Method ()
 * 
 * 6 = Header ()
 * 
 * 7 = Cookie ()
 * 
 * 8 = Content ()
 * 
 * 9 = FileSimple ()
 * 
 * 10 = FileStructured ()
 * 
 * 11 = FragmentSimple ()
 * 
 * 12 = FragmentStructured ()
 * 
 * 13 = AppendedFile ()
 * 
 * 14 = AppendedFragment ()
 * 
 * 15 = SpecificTarget ()
 */
export enum ParamLocation {
  Undesignated = 0,
  Custom = 1,
  QueryString = 2,
  Directory = 3,
  Path = 4,
  Method = 5,
  Header = 6,
  Cookie = 7,
  Content = 8,
  FileSimple = 9,
  FileStructured = 10,
  FragmentSimple = 11,
  FragmentStructured = 12,
  AppendedFile = 13,
  AppendedFragment = 14,
  SpecificTarget = 15
}
