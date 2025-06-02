/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ResponseDeleteBulkPartySessions } from './ResponseDeleteBulkPartySessions.js'

export const DeleteBulkPartySessionsApiResponse = z.object({
  failed: z.array(ResponseDeleteBulkPartySessions).nullish(),
  success: z.array(z.string()).nullish()
})

export interface DeleteBulkPartySessionsApiResponse extends z.TypeOf<typeof DeleteBulkPartySessionsApiResponse> {}
