/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InputValidationData } from './InputValidationData.js'

export const InputValidationsResponse = z.object({ data: z.array(InputValidationData), version: z.number().int() })

export interface InputValidationsResponse extends z.TypeOf<typeof InputValidationsResponse> {}
