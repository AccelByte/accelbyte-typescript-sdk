/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeUserBlockResponse } from './NativeUserBlockResponse.js'

export const NativeUserBlockResponseArray = z.array(NativeUserBlockResponse)

export interface NativeUserBlockResponseArray extends z.TypeOf<typeof NativeUserBlockResponseArray> {}
