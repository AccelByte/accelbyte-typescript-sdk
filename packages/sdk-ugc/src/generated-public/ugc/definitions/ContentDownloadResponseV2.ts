/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreatorFollowState } from './CreatorFollowState'
import { LikeState } from './LikeState'
import { PayloadUrl } from './PayloadUrl'
import { ScreenshotResponse } from './ScreenshotResponse'

export const ContentDownloadResponseV2 = z.object({
  channelId: z.string(),
  createdTime: z.string(),
  creatorFollowState: CreatorFollowState,
  customAttributes: z.record(z.any()).nullish(),
  downloadCount: z.number().int(),
  fileExtension: z.string().nullish(),
  groups: z.array(z.string()).nullish(),
  id: z.string(),
  isHidden: z.boolean(),
  isOfficial: z.boolean(),
  likeCount: z.number().int(),
  likeState: LikeState.nullish(),
  name: z.string(),
  namespace: z.string(),
  payloadURL: z.array(PayloadUrl).nullish(),
  screenshots: z.array(ScreenshotResponse).nullish(),
  shareCode: z.string(),
  subType: z.string().nullish(),
  tags: z.array(z.string()),
  type: z.string().nullish(),
  updatedTime: z.string().nullish(),
  userId: z.string()
})

export interface ContentDownloadResponseV2 extends z.TypeOf<typeof ContentDownloadResponseV2> {}
