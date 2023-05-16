/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MutedTopicResponse } from './MutedTopicResponse.js'

export const MutedTopicResponseArray = z.array(MutedTopicResponse)

export interface MutedTopicResponseArray extends z.TypeOf<typeof MutedTopicResponseArray> {}
