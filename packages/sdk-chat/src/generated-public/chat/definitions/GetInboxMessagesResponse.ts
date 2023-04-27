/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetInboxMessagesResponseData } from './GetInboxMessagesResponseData.js'

export const GetInboxMessagesResponse = z.object({ data: z.array(GetInboxMessagesResponseData), next: z.string(), previous: z.string() })

export interface GetInboxMessagesResponse extends z.TypeOf<typeof GetInboxMessagesResponse> {}
