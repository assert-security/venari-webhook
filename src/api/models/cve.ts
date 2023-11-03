/* tslint:disable */
/* eslint-disable */
import { CveDataMeta } from '../models/cve-data-meta';
import { CveDescription } from '../models/cve-description';
import { CveProblemType } from '../models/cve-problem-type';
import { CveReferences } from '../models/cve-references';
export interface Cve {
  CVE_data_meta?: CveDataMeta;
  data_format?: string | null;
  data_type?: string | null;
  data_version?: string | null;
  description?: CveDescription;
  problemtype?: CveProblemType;
  references?: CveReferences;
}
