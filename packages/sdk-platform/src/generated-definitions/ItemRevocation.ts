/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation.js'
import { EntitlementRevocation } from './EntitlementRevocation.js'

export const ItemRevocation: z.ZodType<ItemRevocation> = z.lazy(() =>
  z.object({
    creditRevocations: z.array(CreditRevocation).nullish(),
    customRevocation: z.record(z.any()).nullish(),
    entitlementOrigin: z
      .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
      .nullish(),
    entitlementRevocations: z.array(EntitlementRevocation).nullish(),
    itemId: z.string().nullish(),
    itemRevocations: z.array(ItemRevocation).nullish(),
    itemSku: z.string().nullish(),
    itemType: z
      .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
      .nullish(),
    quantity: z.number().int().nullish(),
    reason: z.string().nullish(),
    skipped: z.boolean().nullish(),
    status: z.enum(['FAIL', 'SUCCESS']).nullish(),
    strategy: z.string().nullish()
  })
)

export interface ItemRevocation {
  creditRevocations?: CreditRevocation[] | null | undefined
  customRevocation?: Record<string, any> | null | undefined
  entitlementOrigin?:
    | 'Epic'
    | 'GooglePlay'
    | 'IOS'
    | 'Nintendo'
    | 'Oculus'
    | 'Other'
    | 'Playstation'
    | 'Steam'
    | 'System'
    | 'Twitch'
    | 'Xbox'
    | null
    | undefined
  entitlementRevocations?: EntitlementRevocation[] | null | undefined
  itemId?: string | null | undefined
  itemRevocations?: ItemRevocation[] | null | undefined
  itemSku?: string | null | undefined
  itemType?:
    | 'APP'
    | 'BUNDLE'
    | 'CODE'
    | 'COINS'
    | 'EXTENSION'
    | 'INGAMEITEM'
    | 'LOOTBOX'
    | 'MEDIA'
    | 'OPTIONBOX'
    | 'SEASON'
    | 'SUBSCRIPTION'
    | null
    | undefined
  quantity?: number | null | undefined
  reason?: string | null | undefined
  skipped?: boolean | null | undefined
  status?: 'FAIL' | 'SUCCESS' | null | undefined
  strategy?: string | null | undefined
}
