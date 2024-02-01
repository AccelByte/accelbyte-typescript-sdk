/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ServicePluginConfigInfo = z.object({ grpcServerAddress: z.string().nullish(), namespace: z.string().nullish() })

export interface ServicePluginConfigInfo extends z.TypeOf<typeof ServicePluginConfigInfo> {}
