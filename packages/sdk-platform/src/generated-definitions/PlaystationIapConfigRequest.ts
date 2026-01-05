/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlaystationIapConfigRequest = z.object({
  backOfficeServerClientId: z.string().nullish(),
  backOfficeServerClientSecret: z.string().nullish(),
  enableStreamJob: z.boolean().nullish(),
  environment: z.string(),
  streamName: z.string().nullish(),
  streamPartnerName: z.string().nullish()
})

export interface PlaystationIapConfigRequest extends z.TypeOf<typeof PlaystationIapConfigRequest> {}
