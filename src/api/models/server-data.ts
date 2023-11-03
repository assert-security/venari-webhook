/* tslint:disable */
/* eslint-disable */
import { EndPointData } from '../models/end-point-data';
import { PoweredByData } from '../models/powered-by-data';
import { ServerBannerData } from '../models/server-banner-data';
import { ServerHeaderData } from '../models/server-header-data';
import { ServerTypeEnum } from '../models/server-type-enum';
export interface ServerData {
  Banners?: Array<ServerBannerData> | null;
  EndPoint?: EndPointData;
  EndPointText?: string | null;
  HeaderData?: ServerHeaderData;
  InferredFromUrl?: string | null;
  IsReverseProxy?: boolean;
  OperatingSystem?: string | null;
  OperatingSystemVersion?: string | null;
  PoweredBy?: PoweredByData;
  ServerType?: ServerTypeEnum;
  Version?: string | null;
}
