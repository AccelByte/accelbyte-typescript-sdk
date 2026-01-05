/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AnonymizationAdminApi } from './generated-admin/AnonymizationAdminApi.js'
import { ChannelAdminApi } from './generated-admin/ChannelAdminApi.js'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { ContentAdminApi } from './generated-admin/ContentAdminApi.js'
import { ContentV2AdminApi } from './generated-admin/ContentV2AdminApi.js'
import { GroupAdminApi } from './generated-admin/GroupAdminApi.js'
import { StagingContentAdminApi } from './generated-admin/StagingContentAdminApi.js'
import { TagAdminApi } from './generated-admin/TagAdminApi.js'
import { TypeAdminApi } from './generated-admin/TypeAdminApi.js'
import { AnonymizationApi } from './generated-public/AnonymizationApi.js'
import { PublicChannelApi } from './generated-public/PublicChannelApi.js'
import { PublicContentLegacyApi } from './generated-public/PublicContentLegacyApi.js'
import { PublicContentV2Api } from './generated-public/PublicContentV2Api.js'
import { PublicCreatorApi } from './generated-public/PublicCreatorApi.js'
import { PublicDownloadCountLegacyApi } from './generated-public/PublicDownloadCountLegacyApi.js'
import { PublicDownloadCountV2Api } from './generated-public/PublicDownloadCountV2Api.js'
import { PublicFollowApi } from './generated-public/PublicFollowApi.js'
import { PublicGroupApi } from './generated-public/PublicGroupApi.js'
import { PublicLikeLegacyApi } from './generated-public/PublicLikeLegacyApi.js'
import { PublicLikeV2Api } from './generated-public/PublicLikeV2Api.js'
import { PublicStagingContentApi } from './generated-public/PublicStagingContentApi.js'
import { PublicTagApi } from './generated-public/PublicTagApi.js'
import { PublicTypeApi } from './generated-public/PublicTypeApi.js'

console.log(`${name}@${version}`)

const apis = {
  TagAdminApi,
  TypeAdminApi,
  GroupAdminApi,
  ConfigAdminApi,
  ChannelAdminApi,
  ContentAdminApi,
  ContentV2AdminApi,
  StagingContentAdminApi,
  AnonymizationAdminApi,
  PublicTagApi,
  PublicTypeApi,
  PublicCreatorApi,
  PublicContentLegacyApi,
  PublicContentV2Api,
  PublicLikeLegacyApi,
  PublicFollowApi,
  AnonymizationApi,
  PublicGroupApi,
  PublicChannelApi,
  PublicLikeV2Api,
  PublicDownloadCountV2Api,
  PublicStagingContentApi,
  PublicDownloadCountLegacyApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Ugc = apis
