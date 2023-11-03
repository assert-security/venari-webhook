/* tslint:disable */
/* eslint-disable */
import { TrafficAtomData } from '../models/traffic-atom-data';
export interface TrafficSequenceData {
  OriginalUrl?: string | null;
  TrafficAtoms?: Array<TrafficAtomData> | null;
}
