/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CategoryInfo } from './CategoryInfo'

export const CategoryInfoArray = z.array(CategoryInfo)

export type CategoryInfoArray = z.TypeOf<typeof CategoryInfoArray>
