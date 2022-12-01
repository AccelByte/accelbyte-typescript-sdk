/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XsollaPaywallConfigRequest = z.object({
  theme: z.enum(['DEFAULT', 'DARK', 'DEFAULT_DARK']).nullish(),
  size: z.enum(['SMALL', 'MEDIUM', 'LARGE']).nullish(),
  device: z.enum(['DESKTOP', 'MOBILE']).nullish(),
  showCloseButton: z.boolean().nullish()
})

export type XsollaPaywallConfigRequest = z.TypeOf<typeof XsollaPaywallConfigRequest>
