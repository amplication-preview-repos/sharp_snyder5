import { Promotion as TPromotion } from "../api/promotion/Promotion";

export const PROMOTION_TITLE_FIELD = "officeOrder";

export const PromotionTitle = (record: TPromotion): string => {
  return record.officeOrder?.toString() || String(record.id);
};
