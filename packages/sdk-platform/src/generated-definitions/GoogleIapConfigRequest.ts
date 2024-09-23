/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapConfigRequest = z.object({
  applicationName: z.string(),
  notificationTokenAudience: z.string().nullish(),
  notificationTokenEmail: z.string().nullish(),
  serviceAccountId: z.string()
})

export interface GoogleIapConfigRequest extends z.TypeOf<typeof GoogleIapConfigRequest> {}
