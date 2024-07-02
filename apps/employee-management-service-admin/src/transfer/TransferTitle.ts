import { Transfer as TTransfer } from "../api/transfer/Transfer";

export const TRANSFER_TITLE_FIELD = "fromLocation";

export const TransferTitle = (record: TTransfer): string => {
  return record.fromLocation?.toString() || String(record.id);
};
