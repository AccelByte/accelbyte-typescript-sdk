/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LikeState = z.object({ state: z.boolean(), userId: z.string() })

export interface LikeState extends z.TypeOf<typeof LikeState> {}
