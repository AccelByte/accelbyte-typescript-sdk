/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LegalReadinessStatusResponse = z.object({ isReady: z.boolean().nullish() })

export type LegalReadinessStatusResponse = z.TypeOf<typeof LegalReadinessStatusResponse>
