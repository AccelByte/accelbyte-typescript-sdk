/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LinkedEmailSender } from './LinkedEmailSender.js'
import { Paging } from './Paging.js'

export const LinkedEmailSendersResponse = z.object({ data: z.array(LinkedEmailSender), paging: Paging })

export interface LinkedEmailSendersResponse extends z.TypeOf<typeof LinkedEmailSendersResponse> {}
