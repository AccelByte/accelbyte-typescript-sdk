/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserProfilePublicInfo } from './UserProfilePublicInfo'

export const UserProfilePublicInfoArray = z.array(UserProfilePublicInfo)

export type UserProfilePublicInfoArray = z.TypeOf<typeof UserProfilePublicInfoArray>
