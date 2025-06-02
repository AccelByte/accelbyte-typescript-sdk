/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const ArtifactResponse = z.object({
  artifactType: z.string(),
  createdOn: Time,
  dsId: z.string(),
  expiresOn: Time,
  filename: z.string(),
  fleetId: z.string(),
  id: z.string(),
  imageId: z.string(),
  namespace: z.string(),
  reason: z.string().nullish(),
  region: z.string(),
  sizeBytes: z.number().int(),
  status: z.string()
})

export interface ArtifactResponse extends z.TypeOf<typeof ArtifactResponse> {}
