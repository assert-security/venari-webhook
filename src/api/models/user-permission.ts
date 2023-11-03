/* tslint:disable */
/* eslint-disable */
import { ApplicationGroupRole } from '../models/application-group-role';
export interface UserPermission {
  ApplicationRole?: ApplicationGroupRole;
  CanOwnApplications?: boolean;
  IsAdmin?: boolean;
}
