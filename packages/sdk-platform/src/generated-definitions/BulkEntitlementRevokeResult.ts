/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevokeResult } from './EntitlementRevokeResult.js'

export const BulkEntitlementRevokeResult = z.object({
  failList: z.array(EntitlementRevokeResult).nullish(),
  status: z.enum(['FAIL', 'PARTIAL_SUCCESS', 'SUCCESS']).nullish(),
  successList: z.array(EntitlementRevokeResult).nullish()
})

export interface BulkEntitlementRevokeResult extends z.TypeOf<typeof BulkEntitlementRevokeResult> {}
