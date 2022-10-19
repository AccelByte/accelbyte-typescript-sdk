/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserWithLinkedPlatformAccounts } from './UserWithLinkedPlatformAccounts'

export const ConflictedUserPlatformAccounts = z.object({
  platformUserID: z.string(),
  publisherAccounts: z.array(UserWithLinkedPlatformAccounts)
})

export type ConflictedUserPlatformAccounts = z.TypeOf<typeof ConflictedUserPlatformAccounts>
