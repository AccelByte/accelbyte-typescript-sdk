/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InputValidationDataPublic } from './InputValidationDataPublic.js'

export const InputValidationsPublicResponse = z.object({ data: z.array(InputValidationDataPublic), version: z.number().int() })

export interface InputValidationsPublicResponse extends z.TypeOf<typeof InputValidationsPublicResponse> {}
