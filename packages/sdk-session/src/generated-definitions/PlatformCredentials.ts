/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PsnAppServerCredentials } from './PsnAppServerCredentials.js'

export const PlatformCredentials = z.object({ psn: PsnAppServerCredentials, updatedAt: z.string() })

export interface PlatformCredentials extends z.TypeOf<typeof PlatformCredentials> {}
