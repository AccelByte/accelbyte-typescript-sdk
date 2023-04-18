/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AvatarSyncRequestV4 = z.object({ avatarUrl: z.string(), updatedAt: z.number().int() })

export interface AvatarSyncRequestV4 extends z.TypeOf<typeof AvatarSyncRequestV4> {}
