/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ValidationDetail } from './ValidationDetail'

export const InputValidationData = z.object({ field: z.string(), validation: ValidationDetail })

export type InputValidationData = z.TypeOf<typeof InputValidationData>
