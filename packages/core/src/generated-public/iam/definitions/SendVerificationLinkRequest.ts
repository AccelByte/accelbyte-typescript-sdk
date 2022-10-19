/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SendVerificationLinkRequest = z.object({ languageTag: z.string().nullish() })

export type SendVerificationLinkRequest = z.TypeOf<typeof SendVerificationLinkRequest>
