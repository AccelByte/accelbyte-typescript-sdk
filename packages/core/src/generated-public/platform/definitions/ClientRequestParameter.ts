/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientRequestParameter = z.object({
  region: z.string().nullish(),
  language: z.string().nullish(),
  price: z.number().nullish(),
  currencyCode: z.string().nullish()
})

export type ClientRequestParameter = z.TypeOf<typeof ClientRequestParameter>
