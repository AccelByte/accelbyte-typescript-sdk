/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InputValidationDescription = z.object({ language: z.string(), message: z.array(z.string()) })

export interface InputValidationDescription extends z.TypeOf<typeof InputValidationDescription> {}
