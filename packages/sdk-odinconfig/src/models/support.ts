/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'

export const KnowledgeBaseSettings = z.object({
  isKnowledgeBaseEnabled: z.boolean()
})

export interface KnowledgeBaseSettings extends z.TypeOf<typeof KnowledgeBaseSettings> {}

export const SubmissionForm = z.object({
  email: z.string(),
  isUseExternalSupportEnabled: z.boolean(),
  externalSupportURL: z.string()
})

export interface SubmissionForm extends z.TypeOf<typeof SubmissionForm> {}

export const DisplayCTAButton = z.object({
  isPlayerPortalEnabled: z.boolean(),
  isLauncherEnabled: z.boolean()
})

export interface DisplayCTAButton extends z.TypeOf<typeof DisplayCTAButton> {}
