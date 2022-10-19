/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Validation } from './Validation'

export const InputValidationUpdatePayload = z.object({ field: z.string(), validation: Validation })

export type InputValidationUpdatePayload = z.TypeOf<typeof InputValidationUpdatePayload>
