/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from './Config.js'

export const ConfigList = z.object({ configs: z.array(Config) })

export interface ConfigList extends z.TypeOf<typeof ConfigList> {}
