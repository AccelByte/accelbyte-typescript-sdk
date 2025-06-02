/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PsnEntitlementOwnershipRequest = z.object({ accessToken: z.string().nullish(), serviceLabel: z.number().int().nullish() })

export interface PsnEntitlementOwnershipRequest extends z.TypeOf<typeof PsnEntitlementOwnershipRequest> {}
