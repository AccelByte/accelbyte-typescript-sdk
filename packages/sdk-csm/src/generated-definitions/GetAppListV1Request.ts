/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAppListV1Request = z.object({
  appNames: z.array(z.string()),
  fuzzyAppName: z.string().nullish(),
  scenario: z.string().nullish(),
  statuses: z.array(z.string())
})

export interface GetAppListV1Request extends z.TypeOf<typeof GetAppListV1Request> {}
