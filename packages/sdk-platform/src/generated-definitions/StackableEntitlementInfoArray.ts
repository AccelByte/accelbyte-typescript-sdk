/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { StackableEntitlementInfo } from './StackableEntitlementInfo.js'

export const StackableEntitlementInfoArray = z.array(StackableEntitlementInfo)

export interface StackableEntitlementInfoArray extends z.TypeOf<typeof StackableEntitlementInfoArray> {}
