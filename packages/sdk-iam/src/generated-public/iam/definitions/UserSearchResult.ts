/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserLinkedPlatform } from './UserLinkedPlatform.js'

export const UserSearchResult = z.object({
  DisplayName: z.string(),
  EmailAddress: z.string(),
  LinkedPlatforms: z.array(UserLinkedPlatform),
  PhoneNumber: z.string(),
  UserId: z.string()
})

export interface UserSearchResult extends z.TypeOf<typeof UserSearchResult> {}
