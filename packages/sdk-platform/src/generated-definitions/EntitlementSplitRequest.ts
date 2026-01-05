/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicEntitlementMetadata } from './PublicEntitlementMetadata.js'

export const EntitlementSplitRequest = z.object({ metadata: PublicEntitlementMetadata.nullish(), useCount: z.number().int().nullish() })

export interface EntitlementSplitRequest extends z.TypeOf<typeof EntitlementSplitRequest> {}
