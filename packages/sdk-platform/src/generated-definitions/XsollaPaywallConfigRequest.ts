/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XsollaPaywallConfigRequest = z.object({
  device: z.enum(['DESKTOP', 'MOBILE']).nullish(),
  showCloseButton: z.boolean().nullish(),
  size: z.enum(['LARGE', 'MEDIUM', 'SMALL']).nullish(),
  theme: z.enum(['DARK', 'DEFAULT', 'DEFAULT_DARK']).nullish()
})

export interface XsollaPaywallConfigRequest extends z.TypeOf<typeof XsollaPaywallConfigRequest> {}
