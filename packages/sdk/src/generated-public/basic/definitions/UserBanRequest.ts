/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserBanRequest = z.object({ userIds: z.array(z.string()), actionId: z.number().int(), comment: z.string().nullish() })

export type UserBanRequest = z.TypeOf<typeof UserBanRequest>
