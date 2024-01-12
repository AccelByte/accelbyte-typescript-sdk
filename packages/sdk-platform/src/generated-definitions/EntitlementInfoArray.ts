/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementInfo } from './EntitlementInfo.js'

export const EntitlementInfoArray = z.array(EntitlementInfo)

export interface EntitlementInfoArray extends z.TypeOf<typeof EntitlementInfoArray> {}
