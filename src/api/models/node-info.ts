/* tslint:disable */
/* eslint-disable */
import { LogLevel } from '../models/log-level';
import { NodeStatusEnum } from '../models/node-status-enum';
import { NodeType } from '../models/node-type';
export interface NodeInfo {

  /**
   * Aggregator Id if the node is the elected log aggregator for the host.
   */
  AggregatorID?: string | null;

  /**
   * Application version of the node.
   */
  AppVersion?: string | null;

  /**
   * HTTP endpoint where the node can be found.
   */
  BaseAddress?: string | null;

  /**
   * The node's database version.
   */
  DBVersion?: string | null;

  /**
   * The current debug filter enabled for the node.
   */
  DebugFilters?: string | null;
  DriveFreeSpace?: string | null;

  /**
   * The database ID of the object. Provides direct access to object.
   */
  ID?: number;

  /**
   * Boolean value indiciting if the node is the elected aggregator for the host.
   */
  IsAggregator?: boolean;
  IsMaster?: boolean;

  /**
   * Last time the node checked in with the master node.
   */
  LastUpdated?: string;
  LogLevel?: LogLevel;
  MachineName?: string | null;

  /**
   * Name of the node.
   */
  Name?: string | null;
  ShmSize?: number | null;
  Status?: NodeStatusEnum;
  Type?: NodeType;

  /**
   * Indexed ID. Uses an index to access the object.
   */
  UniqueID?: string | null;
  Version?: number;
}
