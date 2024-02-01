/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetInboxCategoriesResponseItem } from './GetInboxCategoriesResponseItem.js'

export const GetInboxCategoriesResponseItemArray = z.array(GetInboxCategoriesResponseItem)

export interface GetInboxCategoriesResponseItemArray extends z.TypeOf<typeof GetInboxCategoriesResponseItemArray> {}
