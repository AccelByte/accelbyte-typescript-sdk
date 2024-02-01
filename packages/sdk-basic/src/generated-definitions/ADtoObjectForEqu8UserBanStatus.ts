/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoObjectForEqu8UserBanStatus = z.object({ expires: z.string().nullish(), userId: z.string().nullish() })

export interface ADtoObjectForEqu8UserBanStatus extends z.TypeOf<typeof ADtoObjectForEqu8UserBanStatus> {}
