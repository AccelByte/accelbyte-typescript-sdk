/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TlsConfig = z.object({ rootCertFileBytes: z.array(z.string()).nullish(), rootCertFileName: z.string().nullish() })

export interface TlsConfig extends z.TypeOf<typeof TlsConfig> {}
