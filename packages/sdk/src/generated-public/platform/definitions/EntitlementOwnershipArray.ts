/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementOwnership } from './EntitlementOwnership'

export const EntitlementOwnershipArray = z.array(EntitlementOwnership)

export interface EntitlementOwnershipArray extends z.TypeOf<typeof EntitlementOwnershipArray> {}
