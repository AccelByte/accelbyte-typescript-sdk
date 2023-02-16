/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentError = z.object({
  httpStatus: z.number().int().nullish(),
  code: z.number().int().nullish(),
  message: z.string().nullish()
})

export interface FulfillmentError extends z.TypeOf<typeof FulfillmentError> {}
