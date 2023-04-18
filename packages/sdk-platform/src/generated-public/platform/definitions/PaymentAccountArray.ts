/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentAccount } from './PaymentAccount'

export const PaymentAccountArray = z.array(PaymentAccount)

export interface PaymentAccountArray extends z.TypeOf<typeof PaymentAccountArray> {}
