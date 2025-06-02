/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Validation } from './Validation.js'

export const InputValidationUpdatePayload = z.object({ field: z.string(), validation: Validation })

export interface InputValidationUpdatePayload extends z.TypeOf<typeof InputValidationUpdatePayload> {}
