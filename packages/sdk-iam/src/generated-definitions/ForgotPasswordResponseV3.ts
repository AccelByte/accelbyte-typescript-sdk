/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ForgotPasswordResponseV3 = z.object({ namespace: z.string() })

export interface ForgotPasswordResponseV3 extends z.TypeOf<typeof ForgotPasswordResponseV3> {}
