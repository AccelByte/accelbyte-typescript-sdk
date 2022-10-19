/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformAccount } from './PlatformAccount'

export const UserWithPlatformAccounts = z.object({ linkedPlatforms: z.array(PlatformAccount), namespace: z.string(), userId: z.string() })

export type UserWithPlatformAccounts = z.TypeOf<typeof UserWithPlatformAccounts>
