/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeEntitlement = z.object({
  entitlementId: z.string().nullish(),
  ownerId: z.string().nullish(),
  type: z.enum(['DURABLE', 'CONSUMABLE']).nullish(),
  clazz: z.enum(['APP', 'ENTITLEMENT', 'CODE', 'SUBSCRIPTION', 'MEDIA', 'OPTIONBOX', 'LOOTBOX']).nullish()
})

export type RevokeEntitlement = z.TypeOf<typeof RevokeEntitlement>
