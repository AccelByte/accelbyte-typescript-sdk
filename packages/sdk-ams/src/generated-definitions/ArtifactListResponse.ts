/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ArtifactResponse } from './ArtifactResponse.js'

export const ArtifactListResponse = z.object({ data: z.array(ArtifactResponse), totalData: z.number().int() })

export interface ArtifactListResponse extends z.TypeOf<typeof ArtifactListResponse> {}
