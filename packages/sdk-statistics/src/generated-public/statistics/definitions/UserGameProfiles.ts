/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameProfilePublicInfo } from './GameProfilePublicInfo.js'

export const UserGameProfiles = z.object({ userId: z.string().nullish(), gameProfiles: z.array(GameProfilePublicInfo).nullish() })

export interface UserGameProfiles extends z.TypeOf<typeof UserGameProfiles> {}
