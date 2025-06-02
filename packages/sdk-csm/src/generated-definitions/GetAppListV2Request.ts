/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAppListV2Request = z.object({
  appNames: z.array(z.string()).nullish(),
  appStatuses: z.array(z.string()).nullish(),
  fuzzyAppName: z.string().nullish(),
  scenario: z.string().nullish()
})

export interface GetAppListV2Request extends z.TypeOf<typeof GetAppListV2Request> {}
