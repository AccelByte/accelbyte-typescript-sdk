/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicInviteUserRequestV4 = z.object({
  additionalData: z.string().nullish(),
  emailAddress: z.string(),
  languageTag: z.string().nullish(),
  namespace: z.string(),
  namespaceDisplayName: z.string()
})

export interface PublicInviteUserRequestV4 extends z.TypeOf<typeof PublicInviteUserRequestV4> {}
