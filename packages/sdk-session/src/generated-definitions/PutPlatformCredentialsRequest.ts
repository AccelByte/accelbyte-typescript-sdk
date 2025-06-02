/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PsnAppServerCredentialRecord } from './PsnAppServerCredentialRecord.js'

export const PutPlatformCredentialsRequest = z.object({ psn: PsnAppServerCredentialRecord })

export interface PutPlatformCredentialsRequest extends z.TypeOf<typeof PutPlatformCredentialsRequest> {}
