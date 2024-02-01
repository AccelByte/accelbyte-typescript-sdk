/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ModerationRuleActionsRequest } from './ModerationRuleActionsRequest.js'

export const ModerationRuleRequest = z.object({
  action: z.enum(['HideContent']).nullish(),
  actions: ModerationRuleActionsRequest.nullish(),
  active: z.boolean(),
  category: z.enum(['CHAT', 'EXTENSION', 'UGC', 'USER']),
  extensionCategory: z.string().nullish(),
  reason: z.string(),
  threshold: z.number().int()
})

export interface ModerationRuleRequest extends z.TypeOf<typeof ModerationRuleRequest> {}
