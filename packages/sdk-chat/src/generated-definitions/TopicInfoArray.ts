/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TopicInfo } from './TopicInfo.js'

export const TopicInfoArray = z.array(TopicInfo)

export interface TopicInfoArray extends z.TypeOf<typeof TopicInfoArray> {}
