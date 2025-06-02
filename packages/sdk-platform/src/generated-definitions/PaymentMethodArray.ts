/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentMethod } from './PaymentMethod.js'

export const PaymentMethodArray = z.array(PaymentMethod)

export interface PaymentMethodArray extends z.TypeOf<typeof PaymentMethodArray> {}
