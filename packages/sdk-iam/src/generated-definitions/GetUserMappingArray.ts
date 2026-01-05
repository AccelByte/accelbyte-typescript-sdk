/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetUserMapping } from './GetUserMapping.js'

export const GetUserMappingArray = z.array(GetUserMapping)

export interface GetUserMappingArray extends z.TypeOf<typeof GetUserMappingArray> {}
