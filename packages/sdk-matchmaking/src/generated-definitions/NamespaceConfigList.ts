/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceConfig } from './NamespaceConfig.js'

export const NamespaceConfigList = z.object({ configs: z.array(NamespaceConfig) })

export interface NamespaceConfigList extends z.TypeOf<typeof NamespaceConfigList> {}
