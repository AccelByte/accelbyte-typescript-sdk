/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DsHostConfigurationParameters = z.object({ instanceId: z.string(), serversPerVm: z.number().int() })

export interface DsHostConfigurationParameters extends z.TypeOf<typeof DsHostConfigurationParameters> {}
