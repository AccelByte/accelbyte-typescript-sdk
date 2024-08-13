/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CopyContentResponse } from './CopyContentResponse.js'

export const CopyContentResponseArray = z.array(CopyContentResponse)

export interface CopyContentResponseArray extends z.TypeOf<typeof CopyContentResponseArray> {}
