/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateChallengeScheduleRequest = z.object({ action: z.enum(['ACCELERATE', 'STOP']), endDate: z.string().nullish() })

export interface UpdateChallengeScheduleRequest extends z.TypeOf<typeof UpdateChallengeScheduleRequest> {}
