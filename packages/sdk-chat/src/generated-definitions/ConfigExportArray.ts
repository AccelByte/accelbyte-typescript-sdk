/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ConfigExport } from './ConfigExport.js'

export const ConfigExportArray = z.array(ConfigExport)

export interface ConfigExportArray extends z.TypeOf<typeof ConfigExportArray> {}
