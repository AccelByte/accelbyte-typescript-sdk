/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CatalogDefinitionInfo } from './CatalogDefinitionInfo.js'

export const CatalogDefinitionInfoArray = z.array(CatalogDefinitionInfo)

export interface CatalogDefinitionInfoArray extends z.TypeOf<typeof CatalogDefinitionInfoArray> {}
