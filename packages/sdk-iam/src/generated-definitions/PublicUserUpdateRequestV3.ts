/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicUserUpdateRequestV3 = z.object({
  avatarUrl: z.string().nullish(),
  country: z.string().nullish(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string().nullish(),
  languageTag: z.string().nullish(),
  uniqueDisplayName: z.string().nullish(),
  userName: z.string().nullish()
})

export interface PublicUserUpdateRequestV3 extends z.TypeOf<typeof PublicUserUpdateRequestV3> {}
