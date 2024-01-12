/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePlayTimeWeightRequest = z.object({ playtime: z.number().int(), userID: z.string(), weight: z.number() })

export interface UpdatePlayTimeWeightRequest extends z.TypeOf<typeof UpdatePlayTimeWeightRequest> {}
