/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CatalogChangeStatistics = z.object({ count: z.number().int(), selectedCount: z.number().int() })

export type CatalogChangeStatistics = z.TypeOf<typeof CatalogChangeStatistics>
