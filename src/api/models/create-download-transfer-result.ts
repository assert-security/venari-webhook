/* tslint:disable */
/* eslint-disable */
export interface CreateDownloadTransferResult {

  /**
   * Total number of chunks in the data being downloaded.
   */
  ChunkCount?: number;

  /**
   * The size of each chunk of data.
   */
  ChunkSize?: number;

  /**
   * The expected hash value of the data once fully downloaded.
   */
  ExpectedHashHex?: string | null;

  /**
   * The total size in bytes of the data being transfered.
   */
  TotalBytes?: number;
}
