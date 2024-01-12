/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPasswordUpdateRequest = z.object({ LanguageTag: z.string(), NewPassword: z.string(), OldPassword: z.string() })

export interface UserPasswordUpdateRequest extends z.TypeOf<typeof UserPasswordUpdateRequest> {}
