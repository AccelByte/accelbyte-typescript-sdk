/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicThirdPartyPlatformInfo } from './PublicThirdPartyPlatformInfo'

export const PublicThirdPartyPlatformInfoArray = z.array(PublicThirdPartyPlatformInfo)

export type PublicThirdPartyPlatformInfoArray = z.TypeOf<typeof PublicThirdPartyPlatformInfoArray>
