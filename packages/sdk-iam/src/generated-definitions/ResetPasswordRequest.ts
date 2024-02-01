/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResetPasswordRequest = z.object({ Code: z.string(), LoginID: z.string(), NewPassword: z.string() })

export interface ResetPasswordRequest extends z.TypeOf<typeof ResetPasswordRequest> {}
