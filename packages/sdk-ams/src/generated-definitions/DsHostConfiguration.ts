/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DsHostConfiguration = z.object({ instanceId: z.string(), instanceType: z.string(), serversPerVm: z.number().int() })

export interface DsHostConfiguration extends z.TypeOf<typeof DsHostConfiguration> {}
