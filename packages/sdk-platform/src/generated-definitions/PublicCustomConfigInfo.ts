/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BaseTlsConfig } from './BaseTlsConfig.js'

export const PublicCustomConfigInfo = z.object({
  connectionType: z.enum(['INSECURE', 'TLS']),
  grpcServerAddress: z.string(),
  tlsConfig: BaseTlsConfig.nullish()
})

export interface PublicCustomConfigInfo extends z.TypeOf<typeof PublicCustomConfigInfo> {}
