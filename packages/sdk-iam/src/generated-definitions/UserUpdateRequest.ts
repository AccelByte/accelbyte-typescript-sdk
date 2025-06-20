/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserUpdateRequest = z.object({
  Country: z.string().nullish(),
  DateOfBirth: z.string().nullish(),
  DisplayName: z.string().nullish(),
  LanguageTag: z.string().nullish()
})

export interface UserUpdateRequest extends z.TypeOf<typeof UserUpdateRequest> {}
