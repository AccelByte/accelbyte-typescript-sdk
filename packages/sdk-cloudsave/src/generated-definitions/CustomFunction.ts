/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CustomFunction = z.object({
  afterBulkReadGameBinaryRecord: z.boolean(),
  afterBulkReadGameRecord: z.boolean(),
  afterBulkReadPlayerBinaryRecord: z.boolean(),
  afterBulkReadPlayerRecord: z.boolean(),
  afterReadGameBinaryRecord: z.boolean(),
  afterReadGameRecord: z.boolean(),
  afterReadPlayerBinaryRecord: z.boolean(),
  afterReadPlayerRecord: z.boolean(),
  beforeWriteAdminGameRecord: z.boolean(),
  beforeWriteAdminPlayerRecord: z.boolean(),
  beforeWriteGameBinaryRecord: z.boolean(),
  beforeWriteGameRecord: z.boolean(),
  beforeWritePlayerBinaryRecord: z.boolean(),
  beforeWritePlayerRecord: z.boolean()
})

export interface CustomFunction extends z.TypeOf<typeof CustomFunction> {}
