/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicReasonGroupResponse } from './PublicReasonGroupResponse.js'

export const AdminReasonResponse = z.object({
  createdAt: z.string(),
  description: z.string(),
  groups: z.array(PublicReasonGroupResponse).nullish(),
  id: z.string(),
  namespace: z.string(),
  title: z.string(),
  updatedAt: z.string()
})

export interface AdminReasonResponse extends z.TypeOf<typeof AdminReasonResponse> {}
