/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ValidationDetail } from './ValidationDetail.js'

export const InputValidationData = z.object({ field: z.string(), validation: ValidationDetail })

export interface InputValidationData extends z.TypeOf<typeof InputValidationData> {}
