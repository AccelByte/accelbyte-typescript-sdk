/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XboxAchievementRequest = z.object({ id: z.string().nullish(), percentComplete: z.number().int().nullish() })

export type XboxAchievementRequest = z.TypeOf<typeof XboxAchievementRequest>
