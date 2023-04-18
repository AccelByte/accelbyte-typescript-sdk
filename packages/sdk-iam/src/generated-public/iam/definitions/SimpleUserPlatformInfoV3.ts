/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SimpleUserPlatformInfoV3 = z.object({
  displayName: z.string().nullish(),
  linkedAt: z.string(),
  namespace: z.string(),
  originNamespace: z.string(),
  platformId: z.string().nullish()
})

export interface SimpleUserPlatformInfoV3 extends z.TypeOf<typeof SimpleUserPlatformInfoV3> {}
