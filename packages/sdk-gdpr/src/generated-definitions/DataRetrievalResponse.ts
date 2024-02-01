/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DataRetrievalResponse = z.object({ Namespace: z.string(), RequestDate: z.string(), UserID: z.string() })

export interface DataRetrievalResponse extends z.TypeOf<typeof DataRetrievalResponse> {}
