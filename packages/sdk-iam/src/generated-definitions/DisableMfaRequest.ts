/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DisableMfaRequest = z.object({ factor: z.string().nullish(), mfaToken: z.string().nullish() })

export interface DisableMfaRequest extends z.TypeOf<typeof DisableMfaRequest> {}
