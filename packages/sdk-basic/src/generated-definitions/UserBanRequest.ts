/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserBanRequest = z.object({ actionId: z.number().int(), comment: z.string().nullish(), userIds: z.array(z.string()) })

export interface UserBanRequest extends z.TypeOf<typeof UserBanRequest> {}
