/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoObjectForEqu8UserBanStatus = z.object({ userId: z.string().nullish(), expires: z.string().nullish() })

export type ADtoObjectForEqu8UserBanStatus = z.TypeOf<typeof ADtoObjectForEqu8UserBanStatus>
