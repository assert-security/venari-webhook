/* tslint:disable */
/* eslint-disable */
import { ExportedCollectionPropertyDescriptor } from '../models/exported-collection-property-descriptor';
import { FingerprintCollectionEntryData } from '../models/fingerprint-collection-entry-data';
export interface ExportedFingerprintCollectionEntryData {
  Data?: FingerprintCollectionEntryData;
  PropertyDescriptors?: Array<ExportedCollectionPropertyDescriptor> | null;
}
