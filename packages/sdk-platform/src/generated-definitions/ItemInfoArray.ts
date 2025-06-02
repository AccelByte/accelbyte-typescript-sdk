/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo.js'

export const ItemInfoArray = z.array(ItemInfo)

export interface ItemInfoArray extends z.TypeOf<typeof ItemInfoArray> {}
