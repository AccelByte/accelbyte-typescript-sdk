/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PagingCursor } from './PagingCursor'
import { PodConfigRecord } from './PodConfigRecord'

export const ListPodConfigResponse = z.object({ paging: PagingCursor, pod_configs: z.array(PodConfigRecord) })

export interface ListPodConfigResponse extends z.TypeOf<typeof ListPodConfigResponse> {}
