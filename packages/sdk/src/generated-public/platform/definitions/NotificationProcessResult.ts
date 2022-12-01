/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationProcessResult = z.object({
  status: z.enum(['PROCESSED', 'ERROR', 'WARN', 'IGNORED']).nullish(),
  code: z.string().nullish(),
  customParam: z.record(z.any()).nullish(),
  severity: z.number().int().nullish()
})

export type NotificationProcessResult = z.TypeOf<typeof NotificationProcessResult>
