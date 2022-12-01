/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPasswordUpdateV3Request = z.object({ languageTag: z.string(), newPassword: z.string(), oldPassword: z.string() })

export type UserPasswordUpdateV3Request = z.TypeOf<typeof UserPasswordUpdateV3Request>
