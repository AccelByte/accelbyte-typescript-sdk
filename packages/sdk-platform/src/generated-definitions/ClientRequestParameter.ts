/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientRequestParameter = z.object({
  currencyCode: z.string().nullish(),
  language: z.string().nullish(),
  price: z.number().nullish(),
  region: z.string().nullish()
})

export interface ClientRequestParameter extends z.TypeOf<typeof ClientRequestParameter> {}
