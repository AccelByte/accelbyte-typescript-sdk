/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapConfigInfo = z.object({
  applicationName: z.string().nullish(),
  namespace: z.string(),
  notificationTokenAudience: z.string().nullish(),
  notificationTokenEmail: z.string().nullish(),
  p12FileName: z.string().nullish(),
  packageName: z.string().nullish(),
  serviceAccountId: z.string().nullish()
})

export interface GoogleIapConfigInfo extends z.TypeOf<typeof GoogleIapConfigInfo> {}
