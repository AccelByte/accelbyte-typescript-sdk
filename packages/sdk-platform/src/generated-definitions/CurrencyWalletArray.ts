/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencyWallet } from './CurrencyWallet.js'

export const CurrencyWalletArray = z.array(CurrencyWallet)

export interface CurrencyWalletArray extends z.TypeOf<typeof CurrencyWalletArray> {}
