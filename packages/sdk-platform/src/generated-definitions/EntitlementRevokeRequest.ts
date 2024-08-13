/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementRevokeRequest = z.object({ metadata: z.record(z.any()).nullish() })

export interface EntitlementRevokeRequest extends z.TypeOf<typeof EntitlementRevokeRequest> {}
