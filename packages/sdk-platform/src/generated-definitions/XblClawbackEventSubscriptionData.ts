/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblClawbackEventSubscriptionData = z.object({
  consumedDurationInDays: z.number().int().nullish(),
  dateTime: z.string().nullish(),
  durationInDays: z.number().int().nullish(),
  recurrenceId: z.string().nullish()
})

export interface XblClawbackEventSubscriptionData extends z.TypeOf<typeof XblClawbackEventSubscriptionData> {}
