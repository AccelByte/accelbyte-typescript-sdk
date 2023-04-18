/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementSoldRequest = z.object({ useCount: z.number().int().nullish(), requestId: z.string().nullish() })

export interface EntitlementSoldRequest extends z.TypeOf<typeof EntitlementSoldRequest> {}
