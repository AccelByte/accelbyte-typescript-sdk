/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Equ8Config = z.object({ apiKey: z.string().nullish(), namespace: z.string().nullish() })

export interface Equ8Config extends z.TypeOf<typeof Equ8Config> {}
