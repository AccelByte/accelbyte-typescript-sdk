/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BaseCustomConfig = z.object({ connectionType: z.enum(['INSECURE', 'TLS']), grpcServerAddress: z.string() })

export interface BaseCustomConfig extends z.TypeOf<typeof BaseCustomConfig> {}
