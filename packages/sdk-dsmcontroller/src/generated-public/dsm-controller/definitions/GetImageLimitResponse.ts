/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetImageLimitResponseData } from './GetImageLimitResponseData.js'

export const GetImageLimitResponse = z.object({ data: GetImageLimitResponseData })

export interface GetImageLimitResponse extends z.TypeOf<typeof GetImageLimitResponse> {}
