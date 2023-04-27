/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { Localization } from './Localization.js'
import { LootBoxConfig } from './LootBoxConfig.js'
import { OptionBoxConfig } from './OptionBoxConfig.js'
import { Recurring } from './Recurring.js'
import { RegionDataItemDto } from './RegionDataItemDto.js'
import { SaleConfig } from './SaleConfig.js'

export const ItemCreate = z.object({
  itemType: z.enum([
    'APP',
    'COINS',
    'INGAMEITEM',
    'BUNDLE',
    'CODE',
    'SUBSCRIPTION',
    'SEASON',
    'MEDIA',
    'OPTIONBOX',
    'EXTENSION',
    'LOOTBOX'
  ]),
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
  sectionExclusive: z.boolean().nullish(),
  sku: z.string().nullish(),
  images: z.array(Image).nullish(),
  thumbnailUrl: z.string().nullish(),
  regionData: z.record(z.array(RegionDataItemDto)),
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
  optionBoxConfig: OptionBoxConfig.nullish(),
  lootBoxConfig: LootBoxConfig.nullish(),
  sellable: z.boolean().nullish(),
  saleConfig: SaleConfig.nullish()
})

export interface ItemCreate extends z.TypeOf<typeof ItemCreate> {}
