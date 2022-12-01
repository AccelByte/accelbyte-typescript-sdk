/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CategoryUpdate = z.object({ localizationDisplayNames: z.record(z.string()) })

export type CategoryUpdate = z.TypeOf<typeof CategoryUpdate>
