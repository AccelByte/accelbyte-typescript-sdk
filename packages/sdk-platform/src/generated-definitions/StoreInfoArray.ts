/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { StoreInfo } from './StoreInfo.js'

export const StoreInfoArray = z.array(StoreInfo)

export interface StoreInfoArray extends z.TypeOf<typeof StoreInfoArray> {}
