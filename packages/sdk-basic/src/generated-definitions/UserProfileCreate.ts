/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfileCreate = z.object({
  avatarLargeUrl: z.string().nullish(),
  avatarSmallUrl: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  dateOfBirth: z.string().nullish(),
  firstName: z.string().nullish(),
  language: z.string().nullish(),
  lastName: z.string().nullish(),
  timeZone: z.string().nullish()
})

export interface UserProfileCreate extends z.TypeOf<typeof UserProfileCreate> {}
