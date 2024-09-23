/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DsHostConfiguration } from './DsHostConfiguration.js'
import { FleetArtifactsSampleRules } from './FleetArtifactsSampleRules.js'
import { ImageDeploymentProfile } from './ImageDeploymentProfile.js'
import { RegionConfig } from './RegionConfig.js'

export const FleetGetResponse = z.object({
  active: z.boolean(),
  claimKeys: z.array(z.string()),
  dsHostConfiguration: DsHostConfiguration,
  id: z.string(),
  imageDeploymentProfile: ImageDeploymentProfile,
  isLocal: z.boolean(),
  name: z.string(),
  onDemand: z.boolean(),
  regions: z.array(RegionConfig),
  samplingRules: FleetArtifactsSampleRules
})

export interface FleetGetResponse extends z.TypeOf<typeof FleetGetResponse> {}
