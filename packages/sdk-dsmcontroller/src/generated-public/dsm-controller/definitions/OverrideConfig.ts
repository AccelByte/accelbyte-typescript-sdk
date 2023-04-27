/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeploymentConfigOverride } from './DeploymentConfigOverride.js'

export const OverrideConfig = z.object({ allow_version_override: z.boolean(), overrides: z.record(DeploymentConfigOverride) })

export interface OverrideConfig extends z.TypeOf<typeof OverrideConfig> {}
