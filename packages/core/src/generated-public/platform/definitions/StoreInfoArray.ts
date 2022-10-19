/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { StoreInfo } from './StoreInfo'

export const StoreInfoArray = z.array(StoreInfo)

export type StoreInfoArray = z.TypeOf<typeof StoreInfoArray>
