/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Party = z.object({ partyID: z.string().nullish(), userIDs: z.array(z.string()).nullish() })

export interface Party extends z.TypeOf<typeof Party> {}
