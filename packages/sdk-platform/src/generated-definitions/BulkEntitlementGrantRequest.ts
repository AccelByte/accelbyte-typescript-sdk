/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementGrant } from './EntitlementGrant.js'

export const BulkEntitlementGrantRequest = z.object({
  entitlementGrantList: z.array(EntitlementGrant).nullish(),
  userIds: z.array(z.string()).nullish()
})

export interface BulkEntitlementGrantRequest extends z.TypeOf<typeof BulkEntitlementGrantRequest> {}
