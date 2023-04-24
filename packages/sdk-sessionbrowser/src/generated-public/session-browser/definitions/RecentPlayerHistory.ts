/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RecentPlayerHistory = z.object({
  created_at: z.string(),
  namespace: z.string(),
  other_display_name: z.string(),
  other_id: z.string(),
  updated_at: z.string(),
  user_id: z.string()
})

export interface RecentPlayerHistory extends z.TypeOf<typeof RecentPlayerHistory> {}
