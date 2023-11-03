/* tslint:disable */
/* eslint-disable */
import { CollectionPropertyType } from '../models/collection-property-type';
import { DbDataTypeEnum } from '../models/db-data-type-enum';
export interface ExportedCollectionPropertyDescriptor {
  CollectionName?: string | null;
  DataType?: DbDataTypeEnum;
  DisplayText?: string | null;
  Hidden?: boolean;
  Name?: string | null;
  Sortable?: boolean;
  Type?: CollectionPropertyType;
}
