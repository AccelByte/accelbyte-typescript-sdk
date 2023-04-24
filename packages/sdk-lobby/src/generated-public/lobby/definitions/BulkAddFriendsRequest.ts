/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkAddFriendsRequest = z.object({ friendIds: z.array(z.string()) })

export interface BulkAddFriendsRequest extends z.TypeOf<typeof BulkAddFriendsRequest> {}
