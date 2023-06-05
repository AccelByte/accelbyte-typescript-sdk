/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerPlatform } from './PlayerPlatform.js'

export const PlayersCurrentPlatformResponse = z.object({ data: z.array(PlayerPlatform) })

export interface PlayersCurrentPlatformResponse extends z.TypeOf<typeof PlayersCurrentPlatformResponse> {}
