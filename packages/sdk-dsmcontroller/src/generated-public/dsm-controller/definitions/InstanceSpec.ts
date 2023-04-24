/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InstanceSpec = z.object({ cpu: z.number().int(), mem: z.number().int() })

export interface InstanceSpec extends z.TypeOf<typeof InstanceSpec> {}
