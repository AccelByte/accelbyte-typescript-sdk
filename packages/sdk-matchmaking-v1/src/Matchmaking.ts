/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { MatchmakingAdminApi } from './generated-admin/MatchmakingAdminApi.js'
import { MockMatchmakingAdminApi } from './generated-admin/MockMatchmakingAdminApi.js'
import { MatchmakingApi } from './generated-public/MatchmakingApi.js'
import { MatchmakingOperationsApi } from './generated-public/MatchmakingOperationsApi.js'
import { SocialMatchmakingApi } from './generated-public/SocialMatchmakingApi.js'

console.log(`${name}@${version}`)

const apis = {
  MatchmakingAdminApi,
  MockMatchmakingAdminApi,
  MatchmakingOperationsApi,
  MatchmakingApi,
  SocialMatchmakingApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Matchmaking = apis
