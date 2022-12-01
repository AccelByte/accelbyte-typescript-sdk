/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Equ8Config = z.object({ namespace: z.string().nullish(), apiKey: z.string().nullish() })

export type Equ8Config = z.TypeOf<typeof Equ8Config>
