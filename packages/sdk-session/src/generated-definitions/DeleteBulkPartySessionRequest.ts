/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteBulkPartySessionRequest = z.object({ ids: z.array(z.string()) })

export interface DeleteBulkPartySessionRequest extends z.TypeOf<typeof DeleteBulkPartySessionRequest> {}
