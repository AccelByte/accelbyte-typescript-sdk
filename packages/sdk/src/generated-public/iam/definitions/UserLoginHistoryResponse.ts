/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserLoginHistoryResponse = z.object({
  ApplicationName: z.string(),
  City: z.string(),
  Country: z.string(),
  DeviceId: z.string(),
  State: z.string(),
  Timestamp: z.number().int(),
  deviceName: z.string()
})

export interface UserLoginHistoryResponse extends z.TypeOf<typeof UserLoginHistoryResponse> {}
