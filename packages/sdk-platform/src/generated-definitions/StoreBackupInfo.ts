/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StoreBackupInfo = z.object({
  autoBackup: z.boolean(),
  createdAt: z.string(),
  id: z.string(),
  name: z.string(),
  storeId: z.string(),
  updatedAt: z.string()
})

export interface StoreBackupInfo extends z.TypeOf<typeof StoreBackupInfo> {}
