/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementInfo } from './EntitlementInfo.js'

export const EntitlementTransferResult = z.object({ source: EntitlementInfo.nullish(), target: EntitlementInfo.nullish() })

export interface EntitlementTransferResult extends z.TypeOf<typeof EntitlementTransferResult> {}
