/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformAccountClosureClientRequest = z.object({
  bpCert: z.string().nullish(),
  bpCertFileName: z.string().nullish(),
  clientId: z.string().nullish(),
  password: z.string().nullish(),
  publisherKey: z.string().nullish(),
  sandboxId: z.string().nullish(),
  secret: z.string().nullish()
})

export interface PlatformAccountClosureClientRequest extends z.TypeOf<typeof PlatformAccountClosureClientRequest> {}
