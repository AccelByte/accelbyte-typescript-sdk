/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserInputValidationResponse = z.object({ message: z.string().nullish(), valid: z.boolean() })

export interface UserInputValidationResponse extends z.TypeOf<typeof UserInputValidationResponse> {}
