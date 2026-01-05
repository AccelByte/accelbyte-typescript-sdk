/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ReplicaResponse = z.object({
  currentReplica: z.number().int().nullish(),
  maxReplica: z.number().int().nullish(),
  minReplica: z.number().int().nullish(),
  replicaLimit: z.number().int().nullish()
})

export interface ReplicaResponse extends z.TypeOf<typeof ReplicaResponse> {}
