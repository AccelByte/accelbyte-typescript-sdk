/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EstimatedPriceInfo } from './EstimatedPriceInfo.js'

export const EstimatedPriceInfoArray = z.array(EstimatedPriceInfo)

export interface EstimatedPriceInfoArray extends z.TypeOf<typeof EstimatedPriceInfoArray> {}
