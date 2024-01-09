/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PsnAppServerCredentials = z.object({ clientId: z.string(), clientSecret: z.string(), scope: z.string() })

export interface PsnAppServerCredentials extends z.TypeOf<typeof PsnAppServerCredentials> {}
