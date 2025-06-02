/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicEntitlementMetadata = z.object({ operationSource: z.enum(['INVENTORY']).nullish() })

export interface PublicEntitlementMetadata extends z.TypeOf<typeof PublicEntitlementMetadata> {}
