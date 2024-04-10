/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InitiateExportAgreementsToCsvResponse = z.object({ processing: z.boolean() })

export interface InitiateExportAgreementsToCsvResponse extends z.TypeOf<typeof InitiateExportAgreementsToCsvResponse> {}
