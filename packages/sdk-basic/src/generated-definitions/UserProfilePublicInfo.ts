/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserProfilePublicInfo = z.object({
  avatarLargeUrl: z.string().nullish(),
  avatarSmallUrl: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  namespace: z.string().nullish(),
  publicId: z.string().nullish(),
  timeZone: z.string().nullish(),
  userId: z.string().nullish()
})

export interface UserProfilePublicInfo extends z.TypeOf<typeof UserProfilePublicInfo> {}
