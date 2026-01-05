/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BuildDeletionData } from './BuildDeletionData.js'

export const BuildDeletionDataArray = z.array(BuildDeletionData)

export interface BuildDeletionDataArray extends z.TypeOf<typeof BuildDeletionDataArray> {}
