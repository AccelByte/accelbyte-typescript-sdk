/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TlsConfig } from './TlsConfig.js'

export const GrpcServerInfo = z.object({
  address: z.string().nullish(),
  connectionTypeEnum: z.enum(['INSECURE', 'TLS']).nullish(),
  status: z.string().nullish(),
  tlsConfig: TlsConfig.nullish()
})

export interface GrpcServerInfo extends z.TypeOf<typeof GrpcServerInfo> {}
