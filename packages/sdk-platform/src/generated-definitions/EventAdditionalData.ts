/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalDataEntitlement } from './AdditionalDataEntitlement.js'

export const EventAdditionalData = z.object({ entitlement: z.array(AdditionalDataEntitlement).nullish(), purpose: z.string().nullish() })

export interface EventAdditionalData extends z.TypeOf<typeof EventAdditionalData> {}
