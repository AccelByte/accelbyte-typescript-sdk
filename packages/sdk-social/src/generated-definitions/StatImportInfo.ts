/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatImportInfo = z.object({
  failedConfigs: z.array(z.string()),
  ignoredConfigs: z.array(z.string()),
  newConfigs: z.array(z.string()),
  replacedConfigs: z.array(z.string())
})

export interface StatImportInfo extends z.TypeOf<typeof StatImportInfo> {}
