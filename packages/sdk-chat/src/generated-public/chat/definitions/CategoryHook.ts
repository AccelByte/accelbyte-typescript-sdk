/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CategoryHook = z.object({ driver: z.enum(['KAFKA']), params: z.string() })

export interface CategoryHook extends z.TypeOf<typeof CategoryHook> {}
