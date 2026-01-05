/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XboxBpCertValidationRequest = z.object({ bpCert: z.string(), password: z.string() })

export interface XboxBpCertValidationRequest extends z.TypeOf<typeof XboxBpCertValidationRequest> {}
