/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountV3Request = z.object({ emailAddress: z.string(), password: z.string() })

export type UpgradeHeadlessAccountV3Request = z.TypeOf<typeof UpgradeHeadlessAccountV3Request>
