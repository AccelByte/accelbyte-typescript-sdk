/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeploymentWithOverride } from './DeploymentWithOverride'
import { ImageRecord } from './ImageRecord'
import { PodConfigRecord } from './PodConfigRecord'

export const DsmConfigExport = z.object({
  claim_timeout: z.number().int(),
  createdAt: z.string(),
  creation_timeout: z.number().int(),
  default_version: z.string(),
  deployments: z.array(DeploymentWithOverride),
  images: z.array(ImageRecord),
  namespace: z.string(),
  pod_configs: z.array(PodConfigRecord),
  port: z.number().int(),
  ports: z.record(z.number().int()),
  protocol: z.string(),
  providers: z.array(z.string()),
  session_timeout: z.number().int(),
  unreachable_timeout: z.number().int(),
  updatedAt: z.string()
})

export interface DsmConfigExport extends z.TypeOf<typeof DsmConfigExport> {}
