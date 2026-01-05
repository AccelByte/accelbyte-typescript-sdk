/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformDlcEntry = z.object({
  platform: z.enum(['EPICGAMES', 'OCULUS', 'PSN', 'STEAM', 'XBOX']).nullish(),
  platformDlcIdMap: z.record(z.string()).nullish()
})

export interface PlatformDlcEntry extends z.TypeOf<typeof PlatformDlcEntry> {}
