/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveLatestDlcResponse } from './RetrieveLatestDlcResponse'

export const RetrieveLatestDlcResponseArray = z.array(RetrieveLatestDlcResponse)

export type RetrieveLatestDlcResponseArray = z.TypeOf<typeof RetrieveLatestDlcResponseArray>
