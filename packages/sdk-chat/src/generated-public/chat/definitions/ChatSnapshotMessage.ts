/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChatSnapshotMessage = z.object({ chatId: z.string(), createdAt: z.number().int(), message: z.string(), senderId: z.string() })

export interface ChatSnapshotMessage extends z.TypeOf<typeof ChatSnapshotMessage> {}
