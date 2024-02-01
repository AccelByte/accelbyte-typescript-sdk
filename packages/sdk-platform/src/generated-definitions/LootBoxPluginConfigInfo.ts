/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppConfig } from './AppConfig.js'
import { PublicCustomConfigInfo } from './PublicCustomConfigInfo.js'

export const LootBoxPluginConfigInfo = z.object({
  appConfig: AppConfig.nullish(),
  customConfig: PublicCustomConfigInfo.nullish(),
  extendType: z.enum(['APP', 'CUSTOM']).nullish(),
  namespace: z.string()
})

export interface LootBoxPluginConfigInfo extends z.TypeOf<typeof LootBoxPluginConfigInfo> {}
