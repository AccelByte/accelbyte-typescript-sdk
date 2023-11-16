/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ImageRecordResponse } from './ImageRecordResponse.js'

export const GetImageDetailResponse = z.object({ data: ImageRecordResponse })

export interface GetImageDetailResponse extends z.TypeOf<typeof GetImageDetailResponse> {}
