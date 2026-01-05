/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserAgreementsResponse } from './UserAgreementsResponse.js'

export const UserAgreementsResponseArray = z.array(UserAgreementsResponse)

export interface UserAgreementsResponseArray extends z.TypeOf<typeof UserAgreementsResponseArray> {}
