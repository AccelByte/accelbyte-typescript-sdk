/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentMethod } from './PaymentMethod'

export const PaymentMethodArray = z.array(PaymentMethod)

export type PaymentMethodArray = z.TypeOf<typeof PaymentMethodArray>
