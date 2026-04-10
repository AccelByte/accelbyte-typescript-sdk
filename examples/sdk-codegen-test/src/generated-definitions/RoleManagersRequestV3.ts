/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleManagerV3 } from './RoleManagerV3.js'

export const RoleManagersRequestV3 = z.object({ managers: z.array(RoleManagerV3) })

export interface RoleManagersRequestV3 extends z.TypeOf<typeof RoleManagersRequestV3> {}
