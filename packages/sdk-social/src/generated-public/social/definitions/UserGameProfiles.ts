/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameProfilePublicInfo } from './GameProfilePublicInfo.js'

export const UserGameProfiles = z.object({ gameProfiles: z.array(GameProfilePublicInfo).nullish(), userId: z.string().nullish() })

export interface UserGameProfiles extends z.TypeOf<typeof UserGameProfiles> {}
