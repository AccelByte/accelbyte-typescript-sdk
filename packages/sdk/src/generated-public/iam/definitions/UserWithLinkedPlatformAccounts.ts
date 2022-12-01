/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformAccount } from './PlatformAccount'

export const UserWithLinkedPlatformAccounts = z.object({
  displayName: z.string(),
  emailAddress: z.string(),
  linkedPlatforms: z.array(PlatformAccount),
  namespace: z.string(),
  userId: z.string()
})

export type UserWithLinkedPlatformAccounts = z.TypeOf<typeof UserWithLinkedPlatformAccounts>
