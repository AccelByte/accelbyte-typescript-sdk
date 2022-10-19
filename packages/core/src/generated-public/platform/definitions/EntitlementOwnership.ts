/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementOwnership = z.object({ owned: z.boolean(), itemId: z.string().nullish() })

export type EntitlementOwnership = z.TypeOf<typeof EntitlementOwnership>
