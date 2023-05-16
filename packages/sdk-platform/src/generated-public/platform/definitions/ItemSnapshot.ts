/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LootBoxConfig } from './LootBoxConfig.js'
import { OptionBoxConfig } from './OptionBoxConfig.js'
import { Recurring } from './Recurring.js'
import { RegionDataItem } from './RegionDataItem.js'
import { SaleConfig } from './SaleConfig.js'

export const ItemSnapshot = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  baseAppId: z.string().nullish(),
  boothName: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  entitlementType: z.enum(['CONSUMABLE', 'DURABLE']),
  features: z.array(z.string()).nullish(),
  itemId: z.string(),
  itemIds: z.array(z.string()).nullish(),
  itemQty: z.record(z.number().int()).nullish(),
  itemType: z.enum([
    'APP',
    'BUNDLE',
    'CODE',
    'COINS',
    'EXTENSION',
    'INGAMEITEM',
    'LOOTBOX',
    'MEDIA',
    'OPTIONBOX',
    'SEASON',
    'SUBSCRIPTION'
  ]),
  language: z.string(),
  listable: z.boolean().nullish(),
  lootBoxConfig: LootBoxConfig.nullish(),
  maxCount: z.number().int().nullish(),
  maxCountPerUser: z.number().int().nullish(),
  name: z.string(),
  namespace: z.string(),
  optionBoxConfig: OptionBoxConfig.nullish(),
  purchasable: z.boolean().nullish(),
  recurring: Recurring.nullish(),
  region: z.string(),
  regionDataItem: RegionDataItem.nullish(),
  saleConfig: SaleConfig.nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  sectionExclusive: z.boolean().nullish(),
  sellable: z.boolean().nullish(),
  sku: z.string().nullish(),
  stackable: z.boolean().nullish(),
  targetCurrencyCode: z.string().nullish(),
  targetItemId: z.string().nullish(),
  targetNamespace: z.string().nullish(),
  thumbnailUrl: z.string().nullish(),
  title: z.string(),
  updatedAt: z.string().nullish(),
  useCount: z.number().int().nullish()
})

export interface ItemSnapshot extends z.TypeOf<typeof ItemSnapshot> {}
