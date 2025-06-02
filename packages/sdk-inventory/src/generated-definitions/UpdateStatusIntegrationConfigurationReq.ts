/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateStatusIntegrationConfigurationReq = z.object({ status: z.enum(['INIT', 'TIED']) })

export interface UpdateStatusIntegrationConfigurationReq extends z.TypeOf<typeof UpdateStatusIntegrationConfigurationReq> {}
