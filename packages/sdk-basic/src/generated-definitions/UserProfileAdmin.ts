/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfileAdmin = z.object({
  avatarLargeUrl: z.string().nullish(),
  avatarSmallUrl: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  dateOfBirth: z.string().nullish(),
  firstName: z.string().nullish(),
  language: z.string().nullish(),
  lastName: z.string().nullish(),
  privateCustomAttributes: z.record(z.any()).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  timeZone: z.string().nullish(),
  zipCode: z.string().nullish()
})

export interface UserProfileAdmin extends z.TypeOf<typeof UserProfileAdmin> {}
