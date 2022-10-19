/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AuthenticatorKeyResponseV4 = z.object({ secretKey: z.string(), uri: z.string() })

export type AuthenticatorKeyResponseV4 = z.TypeOf<typeof AuthenticatorKeyResponseV4>
