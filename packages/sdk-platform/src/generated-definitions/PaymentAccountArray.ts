/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaymentAccount } from './PaymentAccount.js'

export const PaymentAccountArray = z.array(PaymentAccount)

export interface PaymentAccountArray extends z.TypeOf<typeof PaymentAccountArray> {}
