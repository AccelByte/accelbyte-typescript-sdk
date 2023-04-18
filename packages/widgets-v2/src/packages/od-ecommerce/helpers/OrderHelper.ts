/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ItemPurchaseConditionValidateResultArray } from '@accelbyte/sdk-platform'

export class OrderHelper {
  static doesUserMeetPurchaseCondition(
    userId: string | undefined,
    purchaseConditionValidation: ItemPurchaseConditionValidateResultArray | null
  ) {
    if (!userId) return true
    return purchaseConditionValidation?.[0]?.purchasable
  }
}
