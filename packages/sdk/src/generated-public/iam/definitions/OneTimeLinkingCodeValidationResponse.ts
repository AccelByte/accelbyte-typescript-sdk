/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OneTimeLinkingCodeValidationResponse = z.object({ expired: z.boolean(), valid: z.boolean() })

export interface OneTimeLinkingCodeValidationResponse extends z.TypeOf<typeof OneTimeLinkingCodeValidationResponse> {}
