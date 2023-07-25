/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CustomFunction = z.object({
  afterBulkReadAdminGameRecord: z.boolean(),
  afterBulkReadAdminPlayerRecord: z.boolean(),
  afterBulkReadGameRecord: z.boolean(),
  afterBulkReadPlayerRecord: z.boolean(),
  afterReadAdminGameRecord: z.boolean(),
  afterReadAdminPlayerRecord: z.boolean(),
  afterReadGameRecord: z.boolean(),
  afterReadPlayerRecord: z.boolean(),
  beforeWriteAdminGameRecord: z.boolean(),
  beforeWriteAdminPlayerRecord: z.boolean(),
  beforeWriteGameRecord: z.boolean(),
  beforeWritePlayerRecord: z.boolean()
})

export interface CustomFunction extends z.TypeOf<typeof CustomFunction> {}
