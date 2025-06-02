/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ArtifactTypeSamplingRules } from './ArtifactTypeSamplingRules.js'
import { CoredumpSamplingRules } from './CoredumpSamplingRules.js'

export const FleetArtifactsSampleRules = z.object({ coredumps: CoredumpSamplingRules, logs: ArtifactTypeSamplingRules })

export interface FleetArtifactsSampleRules extends z.TypeOf<typeof FleetArtifactsSampleRules> {}
