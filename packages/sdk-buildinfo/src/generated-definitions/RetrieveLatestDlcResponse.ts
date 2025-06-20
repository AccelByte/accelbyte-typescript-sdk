/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RetrieveLatestDlcResponse = z.object({
  appId: z.string().nullish(),
  buildId: z.string().nullish(),
  version: z.string().nullish()
})

export interface RetrieveLatestDlcResponse extends z.TypeOf<typeof RetrieveLatestDlcResponse> {}
