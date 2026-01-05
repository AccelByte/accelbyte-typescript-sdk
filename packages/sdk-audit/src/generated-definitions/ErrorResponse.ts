/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ErrorResponse = z.object({ errorCode: z.number().int(), errorMessage: z.string() })

export interface ErrorResponse extends z.TypeOf<typeof ErrorResponse> {}
