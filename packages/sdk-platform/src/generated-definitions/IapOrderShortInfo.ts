/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const IapOrderShortInfo = z.object({
  iapOrderNo: z.string().nullish(),
  status: z.enum(['FAILED', 'FULFILLED', 'PARTIAL_REVOKED', 'REVOKED', 'REVOKE_FAILED', 'VERIFIED']).nullish()
})

export interface IapOrderShortInfo extends z.TypeOf<typeof IapOrderShortInfo> {}
