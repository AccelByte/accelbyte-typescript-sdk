/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeletionStatus = z.object({
  DeletionStatus: z.boolean(),
  DisplayName: z.string(),
  ExecutionDate: z.string().nullish(),
  Status: z.string(),
  UserID: z.string()
})

export type DeletionStatus = z.TypeOf<typeof DeletionStatus>
