/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateTicketResolutionsRequest = z.object({
  notes: z.string(),
  status: z.enum(['AUTO_MODERATED', 'CLOSED', 'OPEN', 'UNKNOWN'])
})

export interface UpdateTicketResolutionsRequest extends z.TypeOf<typeof UpdateTicketResolutionsRequest> {}
