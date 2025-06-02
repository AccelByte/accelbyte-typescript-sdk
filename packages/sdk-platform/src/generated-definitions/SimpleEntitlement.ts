/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SimpleEntitlement = z.object({
  entitlementId: z.string().nullish(),
  grantedCode: z.string().nullish(),
  itemId: z.string().nullish(),
  itemNamespace: z.string().nullish(),
  name: z.string().nullish(),
  namespace: z.string().nullish(),
  origin: z.string().nullish(),
  sku: z.string().nullish(),
  useCount: z.number().int().nullish()
})

export interface SimpleEntitlement extends z.TypeOf<typeof SimpleEntitlement> {}
