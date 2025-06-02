/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PsnEvent } from './PsnEvent.js'

export const CreatePsnEvent = z.object({ events: z.array(PsnEvent), thirdPartyUserId: z.string(), userId: z.string() })

export interface CreatePsnEvent extends z.TypeOf<typeof CreatePsnEvent> {}
