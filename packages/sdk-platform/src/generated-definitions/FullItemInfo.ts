/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { InventoryConfig } from './InventoryConfig.js'
import { Localization } from './Localization.js'
import { LootBoxConfig } from './LootBoxConfig.js'
import { OptionBoxConfig } from './OptionBoxConfig.js'
import { PurchaseCondition } from './PurchaseCondition.js'
import { Recurring } from './Recurring.js'
import { RegionDataItem } from './RegionDataItem.js'
import { SaleConfig } from './SaleConfig.js'

export const FullItemInfo = z.object({
  appId: z.string().nullish(),
  appType: z.enum(['DEMO', 'DLC', 'GAME', 'SOFTWARE']).nullish(),
  baseAppId: z.string().nullish(),
  boothName: z.string().nullish(),
  boundItemIds: z.array(z.string()).nullish(),
  categoryPath: z.string().nullish(),
  clazz: z.string().nullish(),
  createdAt: z.string(),
  displayOrder: z.number().int().nullish(),
  entitlementType: z.enum(['CONSUMABLE', 'DURABLE']),
  ext: z.record(z.any()).nullish(),
  features: z.array(z.string()).nullish(),
  flexible: z.boolean().nullish(),
  images: z.array(Image).nullish(),
  inventoryConfig: InventoryConfig.nullish(),
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
  listable: z.boolean().nullish(),
  localizations: z.record(Localization),
  lootBoxConfig: LootBoxConfig.nullish(),
  maxCount: z.number().int().nullish(),
  maxCountPerUser: z.number().int().nullish(),
  name: z.string(),
  namespace: z.string(),
  optionBoxConfig: OptionBoxConfig.nullish(),
  purchasable: z.boolean().nullish(),
  purchaseCondition: PurchaseCondition.nullish(),
  recurring: Recurring.nullish(),
  regionData: z.record(z.array(RegionDataItem)),
  saleConfig: SaleConfig.nullish(),
  seasonType: z.enum(['PASS', 'TIER']).nullish(),
  sectionExclusive: z.boolean().nullish(),
  sellable: z.boolean().nullish(),
  sku: z.string().nullish(),
  stackable: z.boolean().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  tags: z.array(z.string()).nullish(),
  targetCurrencyCode: z.string().nullish(),
  targetItemId: z.string().nullish(),
  targetNamespace: z.string().nullish(),
  thumbnailUrl: z.string().nullish(),
  updatedAt: z.string(),
  useCount: z.number().int().nullish()
})

export interface FullItemInfo extends z.TypeOf<typeof FullItemInfo> {}
