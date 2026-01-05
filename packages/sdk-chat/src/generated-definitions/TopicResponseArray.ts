/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TopicResponse } from './TopicResponse.js'

export const TopicResponseArray = z.array(TopicResponse)

export interface TopicResponseArray extends z.TypeOf<typeof TopicResponseArray> {}
