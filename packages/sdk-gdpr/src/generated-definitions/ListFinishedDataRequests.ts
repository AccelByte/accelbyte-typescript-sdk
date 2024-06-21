/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FinishedDataRequest } from './FinishedDataRequest.js'

export const ListFinishedDataRequests = z.object({ data: z.array(FinishedDataRequest) })

export interface ListFinishedDataRequests extends z.TypeOf<typeof ListFinishedDataRequests> {}
