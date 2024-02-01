/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveLatestDlcResponse } from './RetrieveLatestDlcResponse.js'

export const RetrieveLatestDlcResponseArray = z.array(RetrieveLatestDlcResponse)

export interface RetrieveLatestDlcResponseArray extends z.TypeOf<typeof RetrieveLatestDlcResponseArray> {}
