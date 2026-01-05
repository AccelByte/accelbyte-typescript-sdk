/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateGameSessionMemberStatusResponse = z.object({ status: z.string(), statusV2: z.string() })

export interface UpdateGameSessionMemberStatusResponse extends z.TypeOf<typeof UpdateGameSessionMemberStatusResponse> {}
