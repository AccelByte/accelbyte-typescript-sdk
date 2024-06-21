/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FinishedDataDeletion } from './FinishedDataDeletion.js'

export const ListFinishedDataDeletion = z.object({ data: z.array(FinishedDataDeletion) })

export interface ListFinishedDataDeletion extends z.TypeOf<typeof ListFinishedDataDeletion> {}
