/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ErrorDetails } from './ErrorDetails.js'

export const PsnEventResult = z.object({ errorDetail: ErrorDetails.nullish(), isSuccess: z.boolean(), thirdPartyUserId: z.string() })

export interface PsnEventResult extends z.TypeOf<typeof PsnEventResult> {}
