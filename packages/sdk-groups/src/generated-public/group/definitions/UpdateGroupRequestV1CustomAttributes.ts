/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateGroupRequestV1CustomAttributes = z.any()

export interface UpdateGroupRequestV1CustomAttributes extends z.TypeOf<typeof UpdateGroupRequestV1CustomAttributes> {}
