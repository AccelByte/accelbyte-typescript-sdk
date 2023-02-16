/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapConfigInfo = z.object({
  namespace: z.string(),
  applicationName: z.string().nullish(),
  serviceAccountId: z.string().nullish(),
  p12FileName: z.string().nullish()
})

export interface GoogleIapConfigInfo extends z.TypeOf<typeof GoogleIapConfigInfo> {}
