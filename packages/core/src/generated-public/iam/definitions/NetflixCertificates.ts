/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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

export type NetflixCertificates = z.TypeOf<typeof NetflixCertificates>
