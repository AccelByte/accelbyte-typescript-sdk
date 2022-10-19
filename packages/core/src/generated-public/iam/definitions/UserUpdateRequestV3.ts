/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserUpdateRequestV3 = z.object({
  avatarUrl: z.string().nullish(),
  country: z.string().nullish(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string().nullish(),
  languageTag: z.string().nullish(),
  userName: z.string().nullish()
})

export type UserUpdateRequestV3 = z.TypeOf<typeof UserUpdateRequestV3>
