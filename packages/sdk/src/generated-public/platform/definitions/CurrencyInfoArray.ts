/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencyInfo } from './CurrencyInfo'

export const CurrencyInfoArray = z.array(CurrencyInfo)

export interface CurrencyInfoArray extends z.TypeOf<typeof CurrencyInfoArray> {}
