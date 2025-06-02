/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerPlatform = z.object({ crossplayEnabled: z.boolean().nullish(), currentPlatform: z.string(), userID: z.string() })

export interface PlayerPlatform extends z.TypeOf<typeof PlayerPlatform> {}
