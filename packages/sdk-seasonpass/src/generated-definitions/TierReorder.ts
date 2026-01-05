/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TierReorder = z.object({ newIndex: z.number().int().nullish() })

export interface TierReorder extends z.TypeOf<typeof TierReorder> {}
