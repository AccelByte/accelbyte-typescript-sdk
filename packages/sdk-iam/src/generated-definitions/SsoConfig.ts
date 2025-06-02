/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupAndRoleMappingForUpdate } from './GroupAndRoleMappingForUpdate.js'

export const SsoConfig = z.object({ googleKey: z.record(z.any()), groupConfigs: z.array(GroupAndRoleMappingForUpdate) })

export interface SsoConfig extends z.TypeOf<typeof SsoConfig> {}
