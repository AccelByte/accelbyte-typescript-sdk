/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConfigInfo } from './ConfigInfo.js'
import { Paging } from './Paging.js'

export const ConfigsWithPagination = z.object({ data: z.array(ConfigInfo), paging: Paging })

export interface ConfigsWithPagination extends z.TypeOf<typeof ConfigsWithPagination> {}
