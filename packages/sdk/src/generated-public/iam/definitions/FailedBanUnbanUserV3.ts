/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FailedBanUnbanUserV3 = z.object({ reason: z.string(), userId: z.string() })

export type FailedBanUnbanUserV3 = z.TypeOf<typeof FailedBanUnbanUserV3>
