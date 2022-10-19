/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateUserStatusRequest = z.object({ enabled: z.boolean(), reason: z.string() })

export type UpdateUserStatusRequest = z.TypeOf<typeof UpdateUserStatusRequest>
