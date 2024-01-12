/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XsollaPaywallConfig = z.object({
  device: z.enum(['DESKTOP', 'MOBILE']),
  showCloseButton: z.boolean(),
  size: z.enum(['LARGE', 'MEDIUM', 'SMALL']),
  theme: z.enum(['DARK', 'DEFAULT', 'DEFAULT_DARK'])
})

export interface XsollaPaywallConfig extends z.TypeOf<typeof XsollaPaywallConfig> {}
