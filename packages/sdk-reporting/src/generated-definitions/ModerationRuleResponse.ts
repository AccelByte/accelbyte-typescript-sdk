/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ModerationRuleActionsResponse } from './ModerationRuleActionsResponse.js'

export const ModerationRuleResponse = z.object({
  action: z.string().nullish(),
  actions: ModerationRuleActionsResponse,
  active: z.boolean(),
  category: z.string(),
  createdAt: z.string(),
  extensionCategory: z.string().nullish(),
  id: z.string(),
  namespace: z.string(),
  reason: z.string(),
  threshold: z.number().int(),
  updatedAt: z.string().nullish()
})

export interface ModerationRuleResponse extends z.TypeOf<typeof ModerationRuleResponse> {}
