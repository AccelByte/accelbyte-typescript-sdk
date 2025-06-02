/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BanAccountActionResponse } from './BanAccountActionResponse.js'

export const ModerationRuleActionsResponse = z.object({
  banAccount: BanAccountActionResponse.nullish(),
  deleteChat: z.boolean().nullish(),
  extensionActionIds: z.array(z.string()).nullish(),
  hideContent: z.boolean().nullish()
})

export interface ModerationRuleActionsResponse extends z.TypeOf<typeof ModerationRuleActionsResponse> {}
