/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo'

export const ItemInfoArray = z.array(ItemInfo)

export type ItemInfoArray = z.TypeOf<typeof ItemInfoArray>
