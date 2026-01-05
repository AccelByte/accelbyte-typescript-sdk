/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InventoryConfig } from './InventoryConfig.js'

export const PurchaseValidationItemReq = z.object({
  bundledQty: z.number().int(),
  entitlementType: z.string(),
  inventoryConfig: InventoryConfig,
  itemId: z.string(),
  itemType: z.string(),
  sku: z.string(),
  stackable: z.boolean(),
  useCount: z.number().int().nullish()
})

export interface PurchaseValidationItemReq extends z.TypeOf<typeof PurchaseValidationItemReq> {}
