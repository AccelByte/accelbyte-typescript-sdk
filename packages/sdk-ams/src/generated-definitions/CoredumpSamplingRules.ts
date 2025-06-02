/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ArtifactSamplingRule } from './ArtifactSamplingRule.js'

export const CoredumpSamplingRules = z.object({ crashed: ArtifactSamplingRule })

export interface CoredumpSamplingRules extends z.TypeOf<typeof CoredumpSamplingRules> {}
