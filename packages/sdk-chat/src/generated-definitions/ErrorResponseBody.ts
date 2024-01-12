/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ErrorResponseBody = z.object({ ErrorCode: z.number().int(), ErrorMessage: z.string() })

export interface ErrorResponseBody extends z.TypeOf<typeof ErrorResponseBody> {}
