/* tslint:disable */
/* eslint-disable */
import { DbDataTypeEnum } from '../models/db-data-type-enum';
export interface ExportedPropertyDescriptor {
  DataType?: DbDataTypeEnum;
  DisplayText?: string | null;
  Hidden?: boolean;
  Name?: string | null;
  Sortable?: boolean;
}
