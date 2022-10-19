/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountWithVerificationCodeRequest = z.object({ Code: z.string(), Password: z.string(), loginId: z.string() })

export type UpgradeHeadlessAccountWithVerificationCodeRequest = z.TypeOf<typeof UpgradeHeadlessAccountWithVerificationCodeRequest>
