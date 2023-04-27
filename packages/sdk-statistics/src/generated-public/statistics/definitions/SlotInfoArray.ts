/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SlotInfo } from './SlotInfo.js'

export const SlotInfoArray = z.array(SlotInfo)

export interface SlotInfoArray extends z.TypeOf<typeof SlotInfoArray> {}
