/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DataRetrievalResponse = z.object({ Namespace: z.string(), RequestDate: z.string(), UserID: z.string() })

export type DataRetrievalResponse = z.TypeOf<typeof DataRetrievalResponse>
