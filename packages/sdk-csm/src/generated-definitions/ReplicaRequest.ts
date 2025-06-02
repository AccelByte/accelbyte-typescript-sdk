/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ReplicaRequest = z.object({ maxReplica: z.number().int().nullish(), minReplica: z.number().int().nullish() })

export interface ReplicaRequest extends z.TypeOf<typeof ReplicaRequest> {}
