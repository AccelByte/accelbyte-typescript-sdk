/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ModelUserPlatformInfo = z.object({ platformDisplayName: z.string(), platformId: z.string(), platformUserId: z.string() })

export interface ModelUserPlatformInfo extends z.TypeOf<typeof ModelUserPlatformInfo> {}
