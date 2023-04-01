/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementRevokeResult } from './EntitlementRevokeResult'

export const BulkEntitlementRevokeResult = z.object({
  successList: z.array(EntitlementRevokeResult).nullish(),
  failList: z.array(EntitlementRevokeResult).nullish(),
  status: z.enum(['SUCCESS', 'FAIL', 'PARTIAL_SUCCESS']).nullish()
})

export interface BulkEntitlementRevokeResult extends z.TypeOf<typeof BulkEntitlementRevokeResult> {}
