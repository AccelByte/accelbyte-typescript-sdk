/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ListViewInfo } from './ListViewInfo.js'

export const ListViewInfoArray = z.array(ListViewInfo)

export interface ListViewInfoArray extends z.TypeOf<typeof ListViewInfoArray> {}
