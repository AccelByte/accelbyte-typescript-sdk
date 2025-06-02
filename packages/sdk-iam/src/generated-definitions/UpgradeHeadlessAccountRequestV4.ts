/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountRequestV4 = z.object({
  dateOfBirth: z.string().nullish(),
  displayName: z.string().nullish(),
  emailAddress: z.string(),
  password: z.string(),
  uniqueDisplayName: z.string().nullish(),
  username: z.string()
})

export interface UpgradeHeadlessAccountRequestV4 extends z.TypeOf<typeof UpgradeHeadlessAccountRequestV4> {}
