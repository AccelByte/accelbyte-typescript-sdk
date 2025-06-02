/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SsoPlatformCredentialResponse } from './SsoPlatformCredentialResponse.js'

export const SsoPlatformCredentialResponseArray = z.array(SsoPlatformCredentialResponse)

export interface SsoPlatformCredentialResponseArray extends z.TypeOf<typeof SsoPlatformCredentialResponseArray> {}
