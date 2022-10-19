/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleLatestBaseGame } from './SimpleLatestBaseGame'

export const RetrieveBaseGameResponse = z.object({ appId: z.string().nullish(), baseGames: z.array(SimpleLatestBaseGame).nullish() })

export type RetrieveBaseGameResponse = z.TypeOf<typeof RetrieveBaseGameResponse>
