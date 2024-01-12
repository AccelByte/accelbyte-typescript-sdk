/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementSplitRequest = z.object({ useCount: z.number().int().nullish() })

export interface EntitlementSplitRequest extends z.TypeOf<typeof EntitlementSplitRequest> {}
