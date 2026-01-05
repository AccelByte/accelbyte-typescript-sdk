/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BasicItem } from './BasicItem.js'

export const BasicItemArray = z.array(BasicItem)

export interface BasicItemArray extends z.TypeOf<typeof BasicItemArray> {}
