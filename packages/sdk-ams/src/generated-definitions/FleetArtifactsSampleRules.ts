/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ArtifactTypeSamplingRules } from './ArtifactTypeSamplingRules.js'

export const FleetArtifactsSampleRules = z.object({ coredumps: ArtifactTypeSamplingRules, logs: ArtifactTypeSamplingRules })

export interface FleetArtifactsSampleRules extends z.TypeOf<typeof FleetArtifactsSampleRules> {}
