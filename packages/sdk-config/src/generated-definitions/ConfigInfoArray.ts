/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConfigInfo } from './ConfigInfo.js'

export const ConfigInfoArray = z.array(ConfigInfo)

export interface ConfigInfoArray extends z.TypeOf<typeof ConfigInfoArray> {}
