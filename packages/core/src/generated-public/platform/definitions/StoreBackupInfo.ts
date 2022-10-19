/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StoreBackupInfo = z.object({
  id: z.string(),
  autoBackup: z.boolean(),
  name: z.string(),
  storeId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type StoreBackupInfo = z.TypeOf<typeof StoreBackupInfo>
