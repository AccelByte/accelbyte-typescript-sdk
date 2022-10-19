/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleReceiptResolveResult = z.object({ needConsume: z.boolean().nullish() })

export type GoogleReceiptResolveResult = z.TypeOf<typeof GoogleReceiptResolveResult>
