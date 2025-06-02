/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OneTimeCodeLinkRedirectionResponse = z.object({ redirectUri: z.string() })

export interface OneTimeCodeLinkRedirectionResponse extends z.TypeOf<typeof OneTimeCodeLinkRedirectionResponse> {}
