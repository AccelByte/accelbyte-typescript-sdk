/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblEntitlementOwnershipRequest = z.object({ delegationToken: z.string().nullish(), sandboxId: z.string().nullish() })

export interface XblEntitlementOwnershipRequest extends z.TypeOf<typeof XblEntitlementOwnershipRequest> {}
