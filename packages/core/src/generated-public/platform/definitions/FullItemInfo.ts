/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image'
import { Localization } from './Localization'
import { OptionBoxConfig } from './OptionBoxConfig'
import { PurchaseCondition } from './PurchaseCondition'
import { Recurring } from './Recurring'
import { RegionDataItem } from './RegionDataItem'

export const FullItemInfo = z.object({
  itemId: z.string(),
  appId: z.string().nullish(),
  appType: z.enum(['GAME', 'SOFTWARE', 'DLC', 'DEMO']).nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  baseAppId: z.string().nullish(),
  namespace: z.string(),
  sku: z.string().nullish(),
  name: z.string(),
  entitlementType: z.enum(['DURABLE', 'CONSUMABLE']),
  useCount: z.number().int().nullish(),
  stackable: z.boolean().nullish(),
  categoryPath: z.string(),
  images: z.array(Image).nullish(),
  thumbnailUrl: z.string().nullish(),
  localizations: z.record(Localization),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  listable: z.boolean().nullish(),
  purchasable: z.boolean().nullish(),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']),
  targetNamespace: z.string().nullish(),
  targetCurrencyCode: z.string().nullish(),
  targetItemId: z.string().nullish(),
  regionData: z.record(z.array(RegionDataItem)),
  recurring: Recurring.nullish(),
  itemIds: z.array(z.string()).nullish(),
  itemQty: z.record(z.number().int()).nullish(),
  boundItemIds: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish(),
  features: z.array(z.string()).nullish(),
  maxCountPerUser: z.number().int().nullish(),
  maxCount: z.number().int().nullish(),
  clazz: z.string().nullish(),
  ext: z.record(z.any()).nullish(),
  boothName: z.string().nullish(),
  displayOrder: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  purchaseCondition: PurchaseCondition.nullish(),
  optionBoxConfig: OptionBoxConfig.nullish()
})

export type FullItemInfo = z.TypeOf<typeof FullItemInfo>
