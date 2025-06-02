/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RedeemRequest = z.object({ code: z.string(), orderNo: z.string().nullish() })

export interface RedeemRequest extends z.TypeOf<typeof RedeemRequest> {}
