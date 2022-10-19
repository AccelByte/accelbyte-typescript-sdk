/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XsollaPaywallConfig = z.object({
  theme: z.enum(['DEFAULT', 'DARK', 'DEFAULT_DARK']),
  size: z.enum(['SMALL', 'MEDIUM', 'LARGE']),
  device: z.enum(['DESKTOP', 'MOBILE']),
  showCloseButton: z.boolean()
})

export type XsollaPaywallConfig = z.TypeOf<typeof XsollaPaywallConfig>
