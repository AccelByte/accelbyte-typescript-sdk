/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetDeploymentListV1DataItem } from './GetDeploymentListV1DataItem.js'
import { Pagination } from './Pagination.js'

export const GetDeploymentListV1Response = z.object({ data: z.array(GetDeploymentListV1DataItem), paging: Pagination.nullish() })

export interface GetDeploymentListV1Response extends z.TypeOf<typeof GetDeploymentListV1Response> {}
