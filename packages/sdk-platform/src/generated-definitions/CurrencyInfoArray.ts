/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencyInfo } from './CurrencyInfo.js'

export const CurrencyInfoArray = z.array(CurrencyInfo)

export interface CurrencyInfoArray extends z.TypeOf<typeof CurrencyInfoArray> {}
