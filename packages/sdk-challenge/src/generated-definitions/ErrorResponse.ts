/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'

export const ErrorResponse = z.object({ errorCode: z.number().int(), errorMessage: z.string(), requiredPermission: Permission.nullish() })

export interface ErrorResponse extends z.TypeOf<typeof ErrorResponse> {}
