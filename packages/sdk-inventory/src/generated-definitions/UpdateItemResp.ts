/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ErrorResponse } from './ErrorResponse.js'

export const UpdateItemResp = z.object({
  errorDetails: ErrorResponse.nullish(),
  slotId: z.string(),
  sourceItemId: z.string(),
  success: z.boolean()
})

export interface UpdateItemResp extends z.TypeOf<typeof UpdateItemResp> {}
