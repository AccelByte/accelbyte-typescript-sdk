/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ThirdPartySubscriptionOwnership = z.object({ owned: z.boolean() })

export interface ThirdPartySubscriptionOwnership extends z.TypeOf<typeof ThirdPartySubscriptionOwnership> {}
