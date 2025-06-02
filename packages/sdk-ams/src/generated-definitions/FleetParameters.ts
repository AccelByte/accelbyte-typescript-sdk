/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DsHostConfigurationParameters } from './DsHostConfigurationParameters.js'
import { FleetArtifactsSampleRules } from './FleetArtifactsSampleRules.js'
import { ImageDeploymentProfile } from './ImageDeploymentProfile.js'
import { RegionConfig } from './RegionConfig.js'

export const FleetParameters = z.object({
  active: z.boolean(),
  claimKeys: z.array(z.string()).nullish(),
  dsHostConfiguration: DsHostConfigurationParameters,
  fallbackFleet: z.string().nullish(),
  imageDeploymentProfile: ImageDeploymentProfile,
  name: z.string(),
  onDemand: z.boolean(),
  regions: z.array(RegionConfig),
  samplingRules: FleetArtifactsSampleRules.nullish()
})

export interface FleetParameters extends z.TypeOf<typeof FleetParameters> {}
