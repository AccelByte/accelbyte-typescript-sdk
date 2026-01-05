/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateGroupConfigurationRequestV1 = z.object({ description: z.string(), groupMaxMember: z.number().int(), name: z.string() })

export interface UpdateGroupConfigurationRequestV1 extends z.TypeOf<typeof UpdateGroupConfigurationRequestV1> {}
