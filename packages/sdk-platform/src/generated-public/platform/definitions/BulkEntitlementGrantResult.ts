/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementGrantResult } from './EntitlementGrantResult'

export const BulkEntitlementGrantResult = z.object({
  successList: z.array(EntitlementGrantResult).nullish(),
  failList: z.array(EntitlementGrantResult).nullish(),
  status: z.enum(['SUCCESS', 'FAIL', 'PARTIAL_SUCCESS']).nullish()
})

export interface BulkEntitlementGrantResult extends z.TypeOf<typeof BulkEntitlementGrantResult> {}
