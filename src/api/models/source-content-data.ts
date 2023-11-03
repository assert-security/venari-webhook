/* tslint:disable */
/* eslint-disable */
import { FileArchiveData } from '../models/file-archive-data';
import { FileArchiveType } from '../models/file-archive-type';
export interface SourceContentData {
  ArchiveData?: FileArchiveData;
  ArchiveType?: FileArchiveType;
  Bytes?: string | null;
  BytesHash?: string;
}
