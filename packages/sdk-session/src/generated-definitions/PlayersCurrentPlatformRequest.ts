/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayersCurrentPlatformRequest = z.object({ userIDs: z.array(z.string()) })

export interface PlayersCurrentPlatformRequest extends z.TypeOf<typeof PlayersCurrentPlatformRequest> {}
