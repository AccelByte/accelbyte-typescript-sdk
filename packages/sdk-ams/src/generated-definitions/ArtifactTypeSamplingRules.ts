/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ArtifactSamplingRule } from './ArtifactSamplingRule.js'

export const ArtifactTypeSamplingRules = z.object({ crashed: ArtifactSamplingRule, success: ArtifactSamplingRule })

export interface ArtifactTypeSamplingRules extends z.TypeOf<typeof ArtifactTypeSamplingRules> {}
