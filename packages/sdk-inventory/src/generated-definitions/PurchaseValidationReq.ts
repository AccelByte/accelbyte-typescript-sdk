/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InventoryConfig } from './InventoryConfig.js'
import { PurchaseValidationItemReq } from './PurchaseValidationItemReq.js'

export const PurchaseValidationReq = z.object({
  entitlementType: z.string().nullish(),
  inventoryConfig: InventoryConfig.nullish(),
  itemId: z.string(),
  itemType: z.string(),
  items: z.array(PurchaseValidationItemReq).nullish(),
  quantity: z.number().int(),
  sku: z.string(),
  stackable: z.boolean(),
  useCount: z.number().int().nullish()
})

export interface PurchaseValidationReq extends z.TypeOf<typeof PurchaseValidationReq> {}
