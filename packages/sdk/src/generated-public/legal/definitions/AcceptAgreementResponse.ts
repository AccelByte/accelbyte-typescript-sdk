/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AcceptAgreementResponse = z.object({ proceed: z.boolean(), ext: z.record(z.any()).nullish(), comply: z.boolean() })

export type AcceptAgreementResponse = z.TypeOf<typeof AcceptAgreementResponse>
