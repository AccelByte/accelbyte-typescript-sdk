/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ValidationError } from './ValidationError.js'

export const HttpValidationError = z.object({ detail: z.array(ValidationError).nullish() })

export interface HttpValidationError extends z.TypeOf<typeof HttpValidationError> {}
