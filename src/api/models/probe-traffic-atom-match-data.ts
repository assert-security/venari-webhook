/* tslint:disable */
/* eslint-disable */
import { FuzzParameterData } from '../models/fuzz-parameter-data';
import { ProbeMatchData } from '../models/probe-match-data';
import { TrafficMatchLocation } from '../models/traffic-match-location';
export interface ProbeTrafficAtomMatchData {
  ContentType?: string | null;
  Match?: ProbeMatchData;
  MatchLocation?: TrafficMatchLocation;
  Parameter?: FuzzParameterData;
  TrafficAtomIndex?: number | null;
}
