/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ServicePluginConfigUpdate = z.object({ grpcServerAddress: z.string().nullish() })

export interface ServicePluginConfigUpdate extends z.TypeOf<typeof ServicePluginConfigUpdate> {}
