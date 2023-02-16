/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation'
import { EntitlementRevocation } from './EntitlementRevocation'

export const ItemRevocation: z.ZodType<ItemRevocation> = z.lazy(() =>
  z.object({
    itemId: z.string().nullish(),
    itemSku: z.string().nullish(),
    itemType: z
      .enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION', 'LOOTBOX'])
      .nullish(),
    status: z.enum(['SUCCESS', 'FAIL']).nullish(),
    skipped: z.boolean().nullish(),
    quantity: z.number().int().nullish(),
    itemRevocations: z.array(ItemRevocation).nullish(),
    creditRevocations: z.array(CreditRevocation).nullish(),
    entitlementRevocations: z.array(EntitlementRevocation).nullish()
  })
)

export interface ItemRevocation {
  itemId?: string | null | undefined
  itemSku?: string | null | undefined
  itemType?:
    | 'APP'
    | 'COINS'
    | 'INGAMEITEM'
    | 'BUNDLE'
    | 'CODE'
    | 'SUBSCRIPTION'
    | 'SEASON'
    | 'MEDIA'
    | 'OPTIONBOX'
    | 'EXTENSION'
    | 'LOOTBOX'
    | null
    | undefined
  status?: 'SUCCESS' | 'FAIL' | null | undefined
  skipped?: boolean | null | undefined
  quantity?: number | null | undefined
  itemRevocations?: ItemRevocation[] | null | undefined
  creditRevocations?: CreditRevocation[] | null | undefined
  entitlementRevocations?: EntitlementRevocation[] | null | undefined
}
