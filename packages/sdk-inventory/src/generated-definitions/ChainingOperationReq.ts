/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Operation } from './Operation.js'

export const ChainingOperationReq = z.object({ message: z.string(), operations: z.array(Operation), requestId: z.string().nullish() })

export interface ChainingOperationReq extends z.TypeOf<typeof ChainingOperationReq> {}
