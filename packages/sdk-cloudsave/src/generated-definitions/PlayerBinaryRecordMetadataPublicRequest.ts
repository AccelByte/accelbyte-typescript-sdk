/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerBinaryRecordMetadataPublicRequest = z.object({ is_public: z.boolean().nullish() })

export interface PlayerBinaryRecordMetadataPublicRequest extends z.TypeOf<typeof PlayerBinaryRecordMetadataPublicRequest> {}
