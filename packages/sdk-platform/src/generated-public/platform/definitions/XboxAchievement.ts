/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XboxAchievement = z.object({ id: z.string().nullish(), percentComplete: z.number().int().nullish() })

export interface XboxAchievement extends z.TypeOf<typeof XboxAchievement> {}
