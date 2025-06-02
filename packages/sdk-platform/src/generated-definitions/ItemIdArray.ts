/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemId } from './ItemId.js'

export const ItemIdArray = z.array(ItemId)

export interface ItemIdArray extends z.TypeOf<typeof ItemIdArray> {}
