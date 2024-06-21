/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserMfaTokenResponseV4 = z.object({ mfaToken: z.string() })

export interface UserMfaTokenResponseV4 extends z.TypeOf<typeof UserMfaTokenResponseV4> {}
