/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LegalReadinessStatusResponse = z.object({ isReady: z.boolean().nullish() })

export interface LegalReadinessStatusResponse extends z.TypeOf<typeof LegalReadinessStatusResponse> {}
