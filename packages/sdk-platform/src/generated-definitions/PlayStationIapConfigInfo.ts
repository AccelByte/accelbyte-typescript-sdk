/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationIapConfigInfo = z.object({
  backOfficeServerClientId: z.string().nullish(),
  backOfficeServerClientSecret: z.string().nullish(),
  enableStreamJob: z.boolean().nullish(),
  environment: z.string().nullish(),
  namespace: z.string(),
  streamName: z.string().nullish(),
  streamPartnerName: z.string().nullish()
})

export interface PlayStationIapConfigInfo extends z.TypeOf<typeof PlayStationIapConfigInfo> {}
