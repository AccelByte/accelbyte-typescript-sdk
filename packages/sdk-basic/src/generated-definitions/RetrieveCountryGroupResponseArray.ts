/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveCountryGroupResponse } from './RetrieveCountryGroupResponse.js'

export const RetrieveCountryGroupResponseArray = z.array(RetrieveCountryGroupResponse)

export interface RetrieveCountryGroupResponseArray extends z.TypeOf<typeof RetrieveCountryGroupResponseArray> {}
