/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfilePrivateInfo = z.object({
  userId: z.string().nullish(),
  namespace: z.string().nullish(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  avatarSmallUrl: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  avatarLargeUrl: z.string().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  language: z.string().nullish(),
  timeZone: z.string().nullish(),
  dateOfBirth: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  zipCode: z.string().nullish(),
  publicId: z.string().nullish(),
  privateCustomAttributes: z.record(z.any()).nullish()
})

export type UserProfilePrivateInfo = z.TypeOf<typeof UserProfilePrivateInfo>
