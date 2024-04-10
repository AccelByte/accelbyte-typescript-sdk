/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IntegrationConfigurationResp } from './IntegrationConfigurationResp.js'
import { Paging } from './Paging.js'

export const ListIntegrationConfigurationsResp = z.object({ data: z.array(IntegrationConfigurationResp), paging: Paging })

export interface ListIntegrationConfigurationsResp extends z.TypeOf<typeof ListIntegrationConfigurationsResp> {}
