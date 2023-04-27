/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderHistoryInfo } from './OrderHistoryInfo.js'

export const OrderHistoryInfoArray = z.array(OrderHistoryInfo)

export interface OrderHistoryInfoArray extends z.TypeOf<typeof OrderHistoryInfoArray> {}
