/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserDeletionStatusResponse = z.object({ deletionStatus: z.boolean() })

export type UserDeletionStatusResponse = z.TypeOf<typeof UserDeletionStatusResponse>
