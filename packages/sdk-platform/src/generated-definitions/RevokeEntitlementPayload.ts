/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeEntitlementPayload = z.object({ count: z.number().int().nullish(), entitlementId: z.string() })

export interface RevokeEntitlementPayload extends z.TypeOf<typeof RevokeEntitlementPayload> {}
