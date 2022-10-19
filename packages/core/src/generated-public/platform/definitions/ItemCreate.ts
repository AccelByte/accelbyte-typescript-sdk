/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image'
import { Localization } from './Localization'
import { OptionBoxConfig } from './OptionBoxConfig'
import { Recurring } from './Recurring'
import { RegionDataItem } from './RegionDataItem'

export const ItemCreate = z.object({
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']),
  name: z.string(),
  entitlementType: z.enum(['DURABLE', 'CONSUMABLE']),
  useCount: z.number().int().nullish(),
  stackable: z.boolean().nullish(),
  appId: z.string().nullish(),
  appType: z.enum(['GAME', 'SOFTWARE', 'DLC', 'DEMO']).nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  baseAppId: z.string().nullish(),
  targetCurrencyCode: z.string().nullish(),
  targetNamespace: z.string().nullish(),
  categoryPath: z.string(),
  localizations: z.record(Localization),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  listable: z.boolean().nullish(),
  purchasable: z.boolean().nullish(),
  sku: z.string().nullish(),
  images: z.array(Image).nullish(),
  thumbnailUrl: z.string().nullish(),
  regionData: z.record(z.array(RegionDataItem)),
  itemIds: z.array(z.string()).nullish(),
  itemQty: z.record(z.number().int()).nullish(),
  recurring: Recurring.nullish(),
  tags: z.array(z.string()).nullish(),
  features: z.array(z.string()).nullish(),
  maxCountPerUser: z.number().int().nullish(),
  maxCount: z.number().int().nullish(),
  boothName: z.string().nullish(),
  displayOrder: z.number().int().nullish(),
  clazz: z.string().nullish(),
  ext: z.record(z.any()).nullish(),
  optionBoxConfig: OptionBoxConfig.nullish()
})

export type ItemCreate = z.TypeOf<typeof ItemCreate>
