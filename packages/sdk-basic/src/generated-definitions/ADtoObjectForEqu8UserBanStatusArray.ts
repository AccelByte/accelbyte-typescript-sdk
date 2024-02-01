/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ADtoObjectForEqu8UserBanStatus } from './ADtoObjectForEqu8UserBanStatus.js'

export const ADtoObjectForEqu8UserBanStatusArray = z.array(ADtoObjectForEqu8UserBanStatus)

export interface ADtoObjectForEqu8UserBanStatusArray extends z.TypeOf<typeof ADtoObjectForEqu8UserBanStatusArray> {}
