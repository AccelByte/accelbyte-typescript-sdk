/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InputValidationDataPublic } from './InputValidationDataPublic'

export const InputValidationsPublicResponse = z.object({ data: z.array(InputValidationDataPublic), version: z.number().int() })

export type InputValidationsPublicResponse = z.TypeOf<typeof InputValidationsPublicResponse>
