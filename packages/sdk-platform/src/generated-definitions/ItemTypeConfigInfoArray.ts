/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemTypeConfigInfo } from './ItemTypeConfigInfo.js'

export const ItemTypeConfigInfoArray = z.array(ItemTypeConfigInfo)

export interface ItemTypeConfigInfoArray extends z.TypeOf<typeof ItemTypeConfigInfoArray> {}
