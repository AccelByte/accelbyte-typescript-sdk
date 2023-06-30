/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePlayerPlaytimeWeightResponse = z.object({ playtime: z.string(), userID: z.string(), weight: z.number() })

export interface UpdatePlayerPlaytimeWeightResponse extends z.TypeOf<typeof UpdatePlayerPlaytimeWeightResponse> {}
