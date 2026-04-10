/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserLinkedPlatform } from './UserLinkedPlatform.js'

export const UserLinkedPlatformArray = z.array(UserLinkedPlatform)

export interface UserLinkedPlatformArray extends z.TypeOf<typeof UserLinkedPlatformArray> {}
