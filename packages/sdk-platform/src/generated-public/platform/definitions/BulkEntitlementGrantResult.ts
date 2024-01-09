/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementGrantResult } from './EntitlementGrantResult.js'

export const BulkEntitlementGrantResult = z.object({
  failList: z.array(EntitlementGrantResult).nullish(),
  status: z.enum(['FAIL', 'PARTIAL_SUCCESS', 'SUCCESS']).nullish(),
  successList: z.array(EntitlementGrantResult).nullish()
})

export interface BulkEntitlementGrantResult extends z.TypeOf<typeof BulkEntitlementGrantResult> {}
