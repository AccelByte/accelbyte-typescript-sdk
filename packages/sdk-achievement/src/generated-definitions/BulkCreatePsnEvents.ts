/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreatePsnEvent } from './CreatePsnEvent.js'

export const BulkCreatePsnEvents = z.object({ data: z.array(CreatePsnEvent) })

export interface BulkCreatePsnEvents extends z.TypeOf<typeof BulkCreatePsnEvents> {}
