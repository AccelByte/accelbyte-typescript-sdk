/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleResponseWithManagers } from './RoleResponseWithManagers.js'

export const RoleResponseWithManagersArray = z.array(RoleResponseWithManagers)

export interface RoleResponseWithManagersArray extends z.TypeOf<typeof RoleResponseWithManagersArray> {}
