/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NetflixCertificates = z.object({
  encryptedPrivateKey: z.string(),
  encryptedPrivateKeyName: z.string(),
  publicCertificate: z.string(),
  publicCertificateName: z.string(),
  rootCertificate: z.string(),
  rootCertificateName: z.string()
})

export interface NetflixCertificates extends z.TypeOf<typeof NetflixCertificates> {}
