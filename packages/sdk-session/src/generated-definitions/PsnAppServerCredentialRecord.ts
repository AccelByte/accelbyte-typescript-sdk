/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PsnAppServerCredentialRecord = z.object({ clientId: z.string(), clientSecret: z.string(), scope: z.string() })

export interface PsnAppServerCredentialRecord extends z.TypeOf<typeof PsnAppServerCredentialRecord> {}
