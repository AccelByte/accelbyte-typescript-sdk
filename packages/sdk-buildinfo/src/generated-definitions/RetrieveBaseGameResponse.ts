/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleLatestBaseGame } from './SimpleLatestBaseGame.js'

export const RetrieveBaseGameResponse = z.object({ appId: z.string().nullish(), baseGames: z.array(SimpleLatestBaseGame).nullish() })

export interface RetrieveBaseGameResponse extends z.TypeOf<typeof RetrieveBaseGameResponse> {}
