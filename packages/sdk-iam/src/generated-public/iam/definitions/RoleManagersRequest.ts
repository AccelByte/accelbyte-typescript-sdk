/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleManager } from './RoleManager'

export const RoleManagersRequest = z.object({ Managers: z.array(RoleManager) })

export interface RoleManagersRequest extends z.TypeOf<typeof RoleManagersRequest> {}