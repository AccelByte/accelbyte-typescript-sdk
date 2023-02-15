/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DurableEntitlementRevocationConfig = z.object({
  enabled: z.boolean().nullish(),
  strategy: z.enum(['REVOKE_OR_REPORT']).nullish()
})

export type DurableEntitlementRevocationConfig = z.TypeOf<typeof DurableEntitlementRevocationConfig>