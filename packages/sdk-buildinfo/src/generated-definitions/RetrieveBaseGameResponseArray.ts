/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveBaseGameResponse } from './RetrieveBaseGameResponse.js'

export const RetrieveBaseGameResponseArray = z.array(RetrieveBaseGameResponse)

export interface RetrieveBaseGameResponseArray extends z.TypeOf<typeof RetrieveBaseGameResponseArray> {}
