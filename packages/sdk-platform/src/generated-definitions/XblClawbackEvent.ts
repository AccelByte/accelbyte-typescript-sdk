/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XblClawbackContractV2 } from './XblClawbackContractV2.js'

export const XblClawbackEvent = z.object({
  data: XblClawbackContractV2,
  datacontenttype: z.string().nullish(),
  id: z.string(),
  source: z.string(),
  specVersion: z.string().nullish(),
  subject: z.string().nullish(),
  time: z.string().nullish(),
  traceparent: z.string().nullish(),
  type: z.string()
})

export interface XblClawbackEvent extends z.TypeOf<typeof XblClawbackEvent> {}
