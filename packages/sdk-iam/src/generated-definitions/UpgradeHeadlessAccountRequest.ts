/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpgradeHeadlessAccountRequest = z.object({ LoginID: z.string(), Password: z.string() })

export interface UpgradeHeadlessAccountRequest extends z.TypeOf<typeof UpgradeHeadlessAccountRequest> {}
