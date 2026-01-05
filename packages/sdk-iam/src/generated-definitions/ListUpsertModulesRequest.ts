/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionSetUpsertRequest } from './PermissionSetUpsertRequest.js'

export const ListUpsertModulesRequest = z.object({ modules: z.array(PermissionSetUpsertRequest) })

export interface ListUpsertModulesRequest extends z.TypeOf<typeof ListUpsertModulesRequest> {}
