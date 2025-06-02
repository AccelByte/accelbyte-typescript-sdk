/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ArtifactSamplingRule = z.object({ collect: z.boolean(), percentage: z.number().int() })

export interface ArtifactSamplingRule extends z.TypeOf<typeof ArtifactSamplingRule> {}
