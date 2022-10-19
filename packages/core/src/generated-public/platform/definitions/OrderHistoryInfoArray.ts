/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderHistoryInfo } from './OrderHistoryInfo'

export const OrderHistoryInfoArray = z.array(OrderHistoryInfo)

export type OrderHistoryInfoArray = z.TypeOf<typeof OrderHistoryInfoArray>
