/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConsumableEntitlementRevocationConfig = z.object({
  enabled: z.boolean().nullish(),
  strategy: z.enum(['CUSTOM', 'REVOKE_OR_REPORT']).nullish()
})

export interface ConsumableEntitlementRevocationConfig extends z.TypeOf<typeof ConsumableEntitlementRevocationConfig> {}
