/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ValidUserIdResponseV4 = z.object({ exists: z.boolean(), userId: z.string() })

export interface ValidUserIdResponseV4 extends z.TypeOf<typeof ValidUserIdResponseV4> {}
