/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const S2SDataRetrievalResponse = z.object({ namespace: z.string(), requestDate: z.string(), userId: z.string() })

export interface S2SDataRetrievalResponse extends z.TypeOf<typeof S2SDataRetrievalResponse> {}
