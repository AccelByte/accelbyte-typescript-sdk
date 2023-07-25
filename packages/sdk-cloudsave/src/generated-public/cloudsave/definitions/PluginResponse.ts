/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppConfig } from './AppConfig.js'
import { CustomConfig } from './CustomConfig.js'
import { CustomFunction } from './CustomFunction.js'

export const PluginResponse = z.object({
  appConfig: AppConfig.nullish(),
  customConfig: CustomConfig.nullish(),
  customFunction: CustomFunction,
  extendType: z.string(),
  namespace: z.string()
})

export interface PluginResponse extends z.TypeOf<typeof PluginResponse> {}
