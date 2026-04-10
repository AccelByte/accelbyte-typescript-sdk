/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AgeRestrictionResponse = z.object({ AgeRestriction: z.number().int(), Enable: z.boolean() })

export interface AgeRestrictionResponse extends z.TypeOf<typeof AgeRestrictionResponse> {}
