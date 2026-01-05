/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CategoryHook = z.object({ driver: z.string().nullish(), params: z.record(z.any()).nullish() })

export interface CategoryHook extends z.TypeOf<typeof CategoryHook> {}
