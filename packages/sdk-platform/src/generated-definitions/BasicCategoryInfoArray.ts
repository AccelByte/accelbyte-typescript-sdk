/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BasicCategoryInfo } from './BasicCategoryInfo.js'

export const BasicCategoryInfoArray = z.array(BasicCategoryInfo)

export interface BasicCategoryInfoArray extends z.TypeOf<typeof BasicCategoryInfoArray> {}
