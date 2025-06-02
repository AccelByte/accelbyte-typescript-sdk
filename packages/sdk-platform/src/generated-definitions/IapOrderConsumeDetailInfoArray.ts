/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapOrderConsumeDetailInfo } from './IapOrderConsumeDetailInfo.js'

export const IapOrderConsumeDetailInfoArray = z.array(IapOrderConsumeDetailInfo)

export interface IapOrderConsumeDetailInfoArray extends z.TypeOf<typeof IapOrderConsumeDetailInfoArray> {}
