/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PortConfiguration } from './PortConfiguration.js'
import { Timeout } from './Timeout.js'

export const ImageDeploymentProfile = z.object({
  commandLine: z.string(),
  imageId: z.string(),
  portConfigurations: z.array(PortConfiguration),
  timeout: Timeout.nullish()
})

export interface ImageDeploymentProfile extends z.TypeOf<typeof ImageDeploymentProfile> {}
