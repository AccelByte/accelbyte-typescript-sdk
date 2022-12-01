/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserInfoResponse } from './UserInfoResponse'

export const ListUserInformationResult = z.object({ data: z.array(UserInfoResponse) })

export type ListUserInformationResult = z.TypeOf<typeof ListUserInformationResult>
