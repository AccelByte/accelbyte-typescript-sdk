/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentScriptInfo = z.object({ id: z.string().nullish(), grantDays: z.string().nullish() })

export interface FulfillmentScriptInfo extends z.TypeOf<typeof FulfillmentScriptInfo> {}
