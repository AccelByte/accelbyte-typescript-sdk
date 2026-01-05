/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblCertificateResponseBody = z.object({
  businessPartnerCertFileBytes: z.string(),
  businessPartnerCertFileName: z.string(),
  createdBy: z.string(),
  namespace: z.string(),
  updatedAt: z.string()
})

export interface XblCertificateResponseBody extends z.TypeOf<typeof XblCertificateResponseBody> {}
