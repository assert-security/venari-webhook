/* tslint:disable */
/* eslint-disable */

/**
 * 1 = None ()
 * 
 * 2 = Html ()
 * 
 * 4 = InlineScript ()
 * 
 * 8 = InlineStyle ()
 * 
 * 16 = StyleSheet ()
 * 
 * 32 = ScriptInclude ()
 * 
 * 64 = Header ()
 * 
 * 128 = RedirectTarget ()
 * 
 * 256 = Url ()
 * 
 * 512 = Text ()
 * 
 * 1024 = Binary ()
 * 
 * 2048 = Comment ()
 * 
 * 4096 = ConditionalMarkup ()
 * 
 * 8192 = SiteMap ()
 * 
 * 16384 = JSON ()
 * 
 * 32768 = Xml ()
 * 
 * 65535 = All ()
 * 
 * 65536 = BrowserIntercept ()
 * 
 * 131072 = Rss ()
 * 
 * 262144 = Atom ()
 * 
 * 524288 = OpenApiSpec ()
 * 
 * 1048576 = YAML ()
 * 
 * 2097152 = WorkflowHTTPRequest ()
 * 
 * 4194304 = ION ()
 * 
 * 8388608 = BrowserRuntimeSnapshot ()
 * 
 * 16777216 = ScriptAttribute ()
 * 
 * 33554432 = DomSnapshot ()
 */
export enum UrlParseLocations {
  None = 1,
  Html = 2,
  InlineScript = 4,
  InlineStyle = 8,
  StyleSheet = 16,
  ScriptInclude = 32,
  Header = 64,
  RedirectTarget = 128,
  Url = 256,
  Text = 512,
  Binary = 1024,
  Comment = 2048,
  ConditionalMarkup = 4096,
  SiteMap = 8192,
  JSON = 16384,
  Xml = 32768,
  All = 65535,
  BrowserIntercept = 65536,
  Rss = 131072,
  Atom = 262144,
  OpenApiSpec = 524288,
  YAML = 1048576,
  WorkflowHTTPRequest = 2097152,
  ION = 4194304,
  BrowserRuntimeSnapshot = 8388608,
  ScriptAttribute = 16777216,
  DomSnapshot = 33554432
}
