/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChatMessageResponse } from './ChatMessageResponse.js'

export const ChatMessageResponseArray = z.array(ChatMessageResponse)

export interface ChatMessageResponseArray extends z.TypeOf<typeof ChatMessageResponseArray> {}
