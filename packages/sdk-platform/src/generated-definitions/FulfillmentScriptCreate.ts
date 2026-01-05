/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentScriptCreate = z.object({ grantDays: z.string().nullish() })

export interface FulfillmentScriptCreate extends z.TypeOf<typeof FulfillmentScriptCreate> {}
