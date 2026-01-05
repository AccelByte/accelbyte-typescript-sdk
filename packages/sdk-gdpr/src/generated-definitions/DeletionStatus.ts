/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeletionStatus = z.object({
  DeletionDate: z.string(),
  DeletionStatus: z.boolean(),
  DisplayName: z.string(),
  ExecutionDate: z.string().nullish(),
  Status: z.string(),
  UserID: z.string()
})

export interface DeletionStatus extends z.TypeOf<typeof DeletionStatus> {}
