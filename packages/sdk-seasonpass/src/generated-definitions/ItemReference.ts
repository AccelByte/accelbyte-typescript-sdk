/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemReference = z.object({ module: z.string().nullish(), references: z.array(z.record(z.string())).nullish() })

export interface ItemReference extends z.TypeOf<typeof ItemReference> {}
