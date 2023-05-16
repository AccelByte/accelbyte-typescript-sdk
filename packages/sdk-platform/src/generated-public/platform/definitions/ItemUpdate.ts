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

export const ItemUpdate = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  baseAppId: z.string().nullish(),
  boothName: z.string().nullish(),
  categoryPath: z.string().nullish(),
  clazz: z.string().nullish(),
  displayOrder: z.number().int().nullish(),
  entitlementType: z.enum(['CONSUMABLE', 'DURABLE']),
  ext: z.record(z.any()).nullish(),
  features: z.array(z.string()).nullish(),
  images: z.array(Image).nullish(),
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
  listable: z.boolean().nullish(),
  localizations: z.record(Localization).nullish(),
  lootBoxConfig: LootBoxConfig.nullish(),
  maxCount: z.number().int().nullish(),
  maxCountPerUser: z.number().int().nullish(),
  name: z.string().nullish(),
  optionBoxConfig: OptionBoxConfig.nullish(),
  purchasable: z.boolean().nullish(),
  recurring: Recurring.nullish(),
  regionData: z.record(z.array(RegionDataItemDto)).nullish(),
  saleConfig: SaleConfig.nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  sectionExclusive: z.boolean().nullish(),
  sellable: z.boolean().nullish(),
  sku: z.string().nullish(),
  stackable: z.boolean().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  tags: z.array(z.string()).nullish(),
  targetCurrencyCode: z.string().nullish(),
  targetNamespace: z.string().nullish(),
  thumbnailUrl: z.string().nullish(),
  useCount: z.number().int().nullish()
})

export interface ItemUpdate extends z.TypeOf<typeof ItemUpdate> {}
