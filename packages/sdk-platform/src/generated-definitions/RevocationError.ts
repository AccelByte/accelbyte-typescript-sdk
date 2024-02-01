/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevocationError = z.object({
  code: z.number().int().nullish(),
  httpStatus: z.number().int().nullish(),
  message: z.string().nullish()
})

export interface RevocationError extends z.TypeOf<typeof RevocationError> {}
