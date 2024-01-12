/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountWithVerificationCodeRequestV3 = z.object({
  code: z.string(),
  country: z.string().nullish(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string().nullish(),
  emailAddress: z.string(),
  password: z.string(),
  validateOnly: z.boolean().nullish()
})

export interface UpgradeHeadlessAccountWithVerificationCodeRequestV3
  extends z.TypeOf<typeof UpgradeHeadlessAccountWithVerificationCodeRequestV3> {}
