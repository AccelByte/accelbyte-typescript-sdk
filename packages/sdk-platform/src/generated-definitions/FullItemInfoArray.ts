/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullItemInfo } from './FullItemInfo.js'

export const FullItemInfoArray = z.array(FullItemInfo)

export interface FullItemInfoArray extends z.TypeOf<typeof FullItemInfoArray> {}
