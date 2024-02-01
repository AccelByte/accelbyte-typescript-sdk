/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicThirdPartyPlatformInfo } from './PublicThirdPartyPlatformInfo.js'

export const PublicThirdPartyPlatformInfoArray = z.array(PublicThirdPartyPlatformInfo)

export interface PublicThirdPartyPlatformInfoArray extends z.TypeOf<typeof PublicThirdPartyPlatformInfoArray> {}
