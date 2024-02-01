/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserResponse } from './UserResponse.js'

export const KickResponse = z.object({ leaderID: z.string(), members: z.array(UserResponse), partyID: z.string() })

export interface KickResponse extends z.TypeOf<typeof KickResponse> {}
