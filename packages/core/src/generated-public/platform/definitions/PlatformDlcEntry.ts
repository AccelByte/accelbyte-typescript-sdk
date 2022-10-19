/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformDlcEntry = z.object({
  platform: z.enum(['PSN', 'STEAM', 'XBOX', 'EPICGAMES']).nullish(),
  platformDlcIdMap: z.record(z.string()).nullish()
})

export type PlatformDlcEntry = z.TypeOf<typeof PlatformDlcEntry>
