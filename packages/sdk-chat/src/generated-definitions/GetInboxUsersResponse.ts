/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserInbox } from './UserInbox.js'

export const GetInboxUsersResponse = z.object({ data: z.array(UserInbox), next: z.string(), previous: z.string() })

export interface GetInboxUsersResponse extends z.TypeOf<typeof GetInboxUsersResponse> {}
