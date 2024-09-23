/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AnonymizationAdminApi } from './generated-admin/AnonymizationAdminApi.js'
import { LeaderboardConfigurationAdminApi } from './generated-admin/LeaderboardConfigurationAdminApi.js'
import { LeaderboardConfigurationV3AdminApi } from './generated-admin/LeaderboardConfigurationV3AdminApi.js'
import { LeaderboardDataAdminApi } from './generated-admin/LeaderboardDataAdminApi.js'
import { LeaderboardDataV3AdminApi } from './generated-admin/LeaderboardDataV3AdminApi.js'
import { UserDataAdminApi } from './generated-admin/UserDataAdminApi.js'
import { UserDataV3AdminApi } from './generated-admin/UserDataV3AdminApi.js'
import { UserVisibilityAdminApi } from './generated-admin/UserVisibilityAdminApi.js'
import { UserVisibilityV3AdminApi } from './generated-admin/UserVisibilityV3AdminApi.js'
import { LeaderboardConfigurationApi } from './generated-public/LeaderboardConfigurationApi.js'
import { LeaderboardConfigurationV3Api } from './generated-public/LeaderboardConfigurationV3Api.js'
import { LeaderboardDataApi } from './generated-public/LeaderboardDataApi.js'
import { LeaderboardDataV3Api } from './generated-public/LeaderboardDataV3Api.js'

console.log(`${name}@${version}`)

const apis = {
  LeaderboardConfigurationAdminApi,
  LeaderboardConfigurationV3AdminApi,
  LeaderboardDataAdminApi,
  LeaderboardDataV3AdminApi,
  UserVisibilityAdminApi,
  UserVisibilityV3AdminApi,
  UserDataAdminApi,
  UserDataV3AdminApi,
  AnonymizationAdminApi,
  LeaderboardConfigurationApi,
  LeaderboardConfigurationV3Api,
  LeaderboardDataApi,
  LeaderboardDataV3Api,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Leaderboard = apis
