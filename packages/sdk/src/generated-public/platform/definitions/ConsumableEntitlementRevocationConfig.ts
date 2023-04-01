/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConsumableEntitlementRevocationConfig = z.object({
  enabled: z.boolean().nullish(),
  strategy: z.enum(['REVOKE_OR_REPORT', 'CUSTOM']).nullish()
})

export interface ConsumableEntitlementRevocationConfig extends z.TypeOf<typeof ConsumableEntitlementRevocationConfig> {}
