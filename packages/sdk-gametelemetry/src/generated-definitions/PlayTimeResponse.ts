/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayTimeResponse = z.object({ total_playtime: z.number() })

export interface PlayTimeResponse extends z.TypeOf<typeof PlayTimeResponse> {}
