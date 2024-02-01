/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserKeyRequest } from './UserKeyRequest.js'

export const BulkUserKeyRequest = z.object({ data: z.array(UserKeyRequest) })

export interface BulkUserKeyRequest extends z.TypeOf<typeof BulkUserKeyRequest> {}
