/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeletionData = z.object({
  DisplayName: z.string(),
  RequestDate: z.string(),
  Status: z.string(),
  UniqueDisplayName: z.string(),
  UserID: z.string()
})

export interface DeletionData extends z.TypeOf<typeof DeletionData> {}
