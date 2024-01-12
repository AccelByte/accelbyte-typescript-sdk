/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ErrorV1 = z.object({ errorCode: z.number().int(), errorMessage: z.string() })

export interface ErrorV1 extends z.TypeOf<typeof ErrorV1> {}
