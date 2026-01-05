/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteBulkGameSessionRequest = z.object({ ids: z.array(z.string()) })

export interface DeleteBulkGameSessionRequest extends z.TypeOf<typeof DeleteBulkGameSessionRequest> {}
