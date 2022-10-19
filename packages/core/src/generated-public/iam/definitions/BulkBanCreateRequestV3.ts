/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkBanCreateRequestV3 = z.object({
  ban: z.string(),
  comment: z.string(),
  endDate: z.string(),
  reason: z.string(),
  skipNotif: z.boolean(),
  userIds: z.array(z.string())
})

export type BulkBanCreateRequestV3 = z.TypeOf<typeof BulkBanCreateRequestV3>
