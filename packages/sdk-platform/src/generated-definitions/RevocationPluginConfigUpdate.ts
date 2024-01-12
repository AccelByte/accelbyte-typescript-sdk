/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppConfig } from './AppConfig.js'
import { BaseCustomConfig } from './BaseCustomConfig.js'

export const RevocationPluginConfigUpdate = z.object({
  appConfig: AppConfig.nullish(),
  customConfig: BaseCustomConfig.nullish(),
  extendType: z.enum(['APP', 'CUSTOM'])
})

export interface RevocationPluginConfigUpdate extends z.TypeOf<typeof RevocationPluginConfigUpdate> {}
