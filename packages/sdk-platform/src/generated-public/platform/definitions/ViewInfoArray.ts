/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ViewInfo } from './ViewInfo'

export const ViewInfoArray = z.array(ViewInfo)

export interface ViewInfoArray extends z.TypeOf<typeof ViewInfoArray> {}
