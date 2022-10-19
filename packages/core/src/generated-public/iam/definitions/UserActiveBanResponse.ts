/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserActiveBanResponse = z.object({ Ban: z.string(), BanId: z.string(), EndDate: z.string() })

export type UserActiveBanResponse = z.TypeOf<typeof UserActiveBanResponse>
