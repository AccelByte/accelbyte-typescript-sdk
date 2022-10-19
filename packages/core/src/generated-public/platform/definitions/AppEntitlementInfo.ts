/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemSnapshot } from './ItemSnapshot'

export const AppEntitlementInfo = z.object({
  namespace: z.string(),
  appId: z.string().nullish(),
  appType: z.enum(['GAME', 'SOFTWARE', 'DLC', 'DEMO']).nullish(),
  sku: z.string().nullish(),
  userId: z.string(),
  storeId: z.string().nullish(),
  itemId: z.string().nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  grantedAt: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CONSUMED', 'REVOKED']),
  itemSnapshot: ItemSnapshot.nullish()
})

export type AppEntitlementInfo = z.TypeOf<typeof AppEntitlementInfo>
