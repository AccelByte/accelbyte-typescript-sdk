/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetDeploymentListV2DataItem } from './GetDeploymentListV2DataItem.js'
import { Pagination } from './Pagination.js'

export const GetDeploymentListV2Response = z.object({ data: z.array(GetDeploymentListV2DataItem), paging: Pagination.nullish() })

export interface GetDeploymentListV2Response extends z.TypeOf<typeof GetDeploymentListV2Response> {}
