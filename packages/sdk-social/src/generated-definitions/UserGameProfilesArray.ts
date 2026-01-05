/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserGameProfiles } from './UserGameProfiles.js'

export const UserGameProfilesArray = z.array(UserGameProfiles)

export interface UserGameProfilesArray extends z.TypeOf<typeof UserGameProfilesArray> {}
