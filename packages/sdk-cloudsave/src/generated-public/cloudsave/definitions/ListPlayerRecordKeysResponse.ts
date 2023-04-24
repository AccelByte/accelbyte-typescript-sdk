/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { PlayerRecordKeyInfo } from './PlayerRecordKeyInfo'

export const ListPlayerRecordKeysResponse = z.object({ data: z.array(PlayerRecordKeyInfo), paging: Pagination })

export interface ListPlayerRecordKeysResponse extends z.TypeOf<typeof ListPlayerRecordKeysResponse> {}
