/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPlatformLinkHistory } from './UserPlatformLinkHistory.js'

export const UserPlatformLinkHistories = z.object({ data: z.array(UserPlatformLinkHistory) })

export interface UserPlatformLinkHistories extends z.TypeOf<typeof UserPlatformLinkHistories> {}
