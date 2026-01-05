/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PassInfo } from './PassInfo.js'

export const PassInfoArray = z.array(PassInfo)

export interface PassInfoArray extends z.TypeOf<typeof PassInfoArray> {}
