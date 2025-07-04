/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const VerifyRegistrationCode = z.object({ code: z.string(), emailAddress: z.string() })

export interface VerifyRegistrationCode extends z.TypeOf<typeof VerifyRegistrationCode> {}
