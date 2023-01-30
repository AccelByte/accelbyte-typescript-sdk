/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ServicePluginConfigInfo = z.object({ namespace: z.string().nullish(), grpcServerAddress: z.string().nullish() })

export type ServicePluginConfigInfo = z.TypeOf<typeof ServicePluginConfigInfo>
