/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PersonalData = z.object({
  DataExpirationDate: z.string(),
  DisplayName: z.string(),
  RequestDate: z.string(),
  ServiceErrors: z.record(z.string()),
  ServiceStatuses: z.record(z.string()),
  Status: z.string(),
  UserID: z.string()
})

export interface PersonalData extends z.TypeOf<typeof PersonalData> {}
