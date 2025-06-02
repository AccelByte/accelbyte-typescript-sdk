/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MuteUserRequest = z.object({ duration: z.number().int(), userId: z.string() })

export interface MuteUserRequest extends z.TypeOf<typeof MuteUserRequest> {}
