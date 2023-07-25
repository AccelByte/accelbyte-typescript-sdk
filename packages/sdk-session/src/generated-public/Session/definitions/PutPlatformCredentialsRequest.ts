/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PsnAppServerCredentials } from './PsnAppServerCredentials.js'

export const PutPlatformCredentialsRequest = z.object({ psn: PsnAppServerCredentials })

export interface PutPlatformCredentialsRequest extends z.TypeOf<typeof PutPlatformCredentialsRequest> {}
