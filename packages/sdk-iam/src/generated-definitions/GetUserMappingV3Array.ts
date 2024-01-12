/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetUserMappingV3 } from './GetUserMappingV3.js'

export const GetUserMappingV3Array = z.array(GetUserMappingV3)

export interface GetUserMappingV3Array extends z.TypeOf<typeof GetUserMappingV3Array> {}
