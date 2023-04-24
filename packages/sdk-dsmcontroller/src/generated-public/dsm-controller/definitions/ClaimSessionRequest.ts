/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClaimSessionRequest = z.object({ session_id: z.string() })

export interface ClaimSessionRequest extends z.TypeOf<typeof ClaimSessionRequest> {}
