/* tslint:disable */
/* eslint-disable */
export interface CreateDownloadTransferRequest {

  /**
   * The size to use for the data chunks
   */
  ChunkSize?: number | null;

  /**
   * An existing transfer id.
   */
  TransferId: string;
}
