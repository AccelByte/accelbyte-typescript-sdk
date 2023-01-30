/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SectionItem = z.object({ id: z.string(), sku: z.string().nullish() })

export type SectionItem = z.TypeOf<typeof SectionItem>
