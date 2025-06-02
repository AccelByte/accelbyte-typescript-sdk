/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FailedBanUnbanUserV3 } from './FailedBanUnbanUserV3.js'
import { UserBanResponseV3 } from './UserBanResponseV3.js'

export const ListBulkUserBanResponseV3 = z.object({ failedBans: z.array(FailedBanUnbanUserV3), successBans: z.array(UserBanResponseV3) })

export interface ListBulkUserBanResponseV3 extends z.TypeOf<typeof ListBulkUserBanResponseV3> {}
