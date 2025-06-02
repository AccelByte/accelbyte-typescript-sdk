/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateUserDeletionStatusRequest = z.object({ deletionDate: z.number().int().nullish(), enabled: z.boolean() })

export interface UpdateUserDeletionStatusRequest extends z.TypeOf<typeof UpdateUserDeletionStatusRequest> {}
