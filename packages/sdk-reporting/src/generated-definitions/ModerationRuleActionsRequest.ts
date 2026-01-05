/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BanAccountActionRequest } from './BanAccountActionRequest.js'

export const ModerationRuleActionsRequest = z.object({
  banAccount: BanAccountActionRequest.nullish(),
  deleteChat: z.boolean().nullish(),
  extensionActionIds: z.array(z.string()).nullish(),
  hideContent: z.boolean().nullish()
})

export interface ModerationRuleActionsRequest extends z.TypeOf<typeof ModerationRuleActionsRequest> {}
