/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentScriptInfo = z.object({ grantDays: z.string().nullish(), id: z.string().nullish() })

export interface FulfillmentScriptInfo extends z.TypeOf<typeof FulfillmentScriptInfo> {}
