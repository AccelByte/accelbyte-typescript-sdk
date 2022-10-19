/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { KeyInfo } from './KeyInfo'
import { Paging } from './Paging'

export const KeyPagingSliceResult = z.object({ data: z.array(KeyInfo), paging: Paging.nullish() })

export type KeyPagingSliceResult = z.TypeOf<typeof KeyPagingSliceResult>
