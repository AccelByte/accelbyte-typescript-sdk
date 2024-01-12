/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ListBlockedPlayerRequest = z.object({ listBlockedUserId: z.array(z.string()) })

export interface ListBlockedPlayerRequest extends z.TypeOf<typeof ListBlockedPlayerRequest> {}
