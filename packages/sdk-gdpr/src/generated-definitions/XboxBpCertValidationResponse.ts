/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XboxBpCertValidationResponse = z.object({ expirationDate: z.number().int(), expired: z.boolean() })

export interface XboxBpCertValidationResponse extends z.TypeOf<typeof XboxBpCertValidationResponse> {}
