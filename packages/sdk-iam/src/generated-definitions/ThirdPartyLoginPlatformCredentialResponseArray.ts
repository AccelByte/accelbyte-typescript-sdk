/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ThirdPartyLoginPlatformCredentialResponse } from './ThirdPartyLoginPlatformCredentialResponse.js'

export const ThirdPartyLoginPlatformCredentialResponseArray = z.array(ThirdPartyLoginPlatformCredentialResponse)

export interface ThirdPartyLoginPlatformCredentialResponseArray extends z.TypeOf<typeof ThirdPartyLoginPlatformCredentialResponseArray> {}
