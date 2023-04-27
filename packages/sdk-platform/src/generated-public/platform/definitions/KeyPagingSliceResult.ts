/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { KeyInfo } from './KeyInfo.js'
import { Paging } from './Paging.js'

export const KeyPagingSliceResult = z.object({ data: z.array(KeyInfo), paging: Paging.nullish() })

export interface KeyPagingSliceResult extends z.TypeOf<typeof KeyPagingSliceResult> {}
