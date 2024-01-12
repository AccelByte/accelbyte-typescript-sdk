/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserWithLinkedPlatformAccounts } from './UserWithLinkedPlatformAccounts.js'

export const ConflictedUserPlatformAccounts = z.object({
  platformUserID: z.string(),
  publisherAccounts: z.array(UserWithLinkedPlatformAccounts)
})

export interface ConflictedUserPlatformAccounts extends z.TypeOf<typeof ConflictedUserPlatformAccounts> {}
