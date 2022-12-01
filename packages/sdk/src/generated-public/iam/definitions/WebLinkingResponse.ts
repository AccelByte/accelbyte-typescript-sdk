/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WebLinkingResponse = z.object({ third_party_url: z.string() })

export type WebLinkingResponse = z.TypeOf<typeof WebLinkingResponse>
