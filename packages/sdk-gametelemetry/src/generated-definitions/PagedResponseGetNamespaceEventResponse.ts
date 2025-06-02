/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetNamespaceEventResponse } from './GetNamespaceEventResponse.js'
import { Paging } from './Paging.js'

export const PagedResponseGetNamespaceEventResponse = z.object({ data: z.array(GetNamespaceEventResponse), paging: Paging })

export interface PagedResponseGetNamespaceEventResponse extends z.TypeOf<typeof PagedResponseGetNamespaceEventResponse> {}
