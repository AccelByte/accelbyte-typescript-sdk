/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DevelopmentServerConfigurationGetResponse } from './DevelopmentServerConfigurationGetResponse.js'

export const DevelopmentServerConfigurationListResponse = z.object({
  data: z.array(DevelopmentServerConfigurationGetResponse),
  totalData: z.number().int()
})

export interface DevelopmentServerConfigurationListResponse extends z.TypeOf<typeof DevelopmentServerConfigurationListResponse> {}
