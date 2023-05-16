/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Config } from '../../generated-public/odin-config/definitions/Config.js'
import { z } from 'zod'
import { PageConfig } from './base-configs.js'
import { DisplayCTAButton, KnowledgeBaseSettings, SubmissionForm } from '../../models/support.js'

export const SupportConfigData = z.object({
  pageConfig: z.optional(
    Config.merge(
      z.object({
        data: PageConfig
      })
    )
  ),
  knowledgeBaseSettings: Config.merge(
    z.object({
      data: KnowledgeBaseSettings
    })
  ),
  submissionForm: Config.merge(
    z.object({
      data: SubmissionForm
    })
  ),
  displayCTAButton: Config.merge(
    z.object({
      data: DisplayCTAButton
    })
  )
})

export interface SupportConfigData extends z.infer<typeof SupportConfigData> {}
