/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleManager } from './RoleManager.js'

export const RoleManagersResponse = z.object({ Managers: z.array(RoleManager) })

export interface RoleManagersResponse extends z.TypeOf<typeof RoleManagersResponse> {}
