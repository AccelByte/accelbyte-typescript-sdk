/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateUserPointAdminV1Request = z.object({ inc: z.number(), latestValue: z.number() })

export interface UpdateUserPointAdminV1Request extends z.TypeOf<typeof UpdateUserPointAdminV1Request> {}
