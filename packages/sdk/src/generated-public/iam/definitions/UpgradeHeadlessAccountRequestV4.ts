/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountRequestV4 = z.object({ emailAddress: z.string(), password: z.string(), username: z.string() })

export type UpgradeHeadlessAccountRequestV4 = z.TypeOf<typeof UpgradeHeadlessAccountRequestV4>
