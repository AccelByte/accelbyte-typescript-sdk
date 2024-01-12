/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CategoryCreate = z.object({ categoryPath: z.string(), localizationDisplayNames: z.record(z.string()) })

export interface CategoryCreate extends z.TypeOf<typeof CategoryCreate> {}
