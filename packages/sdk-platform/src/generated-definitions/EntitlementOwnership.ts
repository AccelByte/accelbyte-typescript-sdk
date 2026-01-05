/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementOwnership = z.object({ itemId: z.string().nullish(), owned: z.boolean() })

export interface EntitlementOwnership extends z.TypeOf<typeof EntitlementOwnership> {}
