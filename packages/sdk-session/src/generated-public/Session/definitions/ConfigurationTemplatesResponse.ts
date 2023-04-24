/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConfigurationTemplateResponse } from './ConfigurationTemplateResponse'
import { Pagination } from './Pagination'

export const ConfigurationTemplatesResponse = z.object({ data: z.array(ConfigurationTemplateResponse), paging: Pagination })

export interface ConfigurationTemplatesResponse extends z.TypeOf<typeof ConfigurationTemplatesResponse> {}
