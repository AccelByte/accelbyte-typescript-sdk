/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPublicInfoResponseV4 = z.object({ displayName: z.string(), userId: z.string() })

export interface UserPublicInfoResponseV4 extends z.TypeOf<typeof UserPublicInfoResponseV4> {}
