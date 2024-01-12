/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullCategoryInfo } from './FullCategoryInfo.js'

export const FullCategoryInfoArray = z.array(FullCategoryInfo)

export interface FullCategoryInfoArray extends z.TypeOf<typeof FullCategoryInfoArray> {}
