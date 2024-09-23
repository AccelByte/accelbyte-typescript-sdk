/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { BackfillApi } from './generated-public/BackfillApi.js'
import { ConfigApi } from './generated-public/ConfigApi.js'
import { EnvironmentVariablesApi } from './generated-public/EnvironmentVariablesApi.js'
import { MatchFunctionsApi } from './generated-public/MatchFunctionsApi.js'
import { MatchPoolsApi } from './generated-public/MatchPoolsApi.js'
import { MatchTicketsApi } from './generated-public/MatchTicketsApi.js'
import { RuleSetsApi } from './generated-public/RuleSetsApi.js'

console.log(`${name}@${version}`)

const apis = {
  ConfigAdminApi,
  ConfigApi,
  EnvironmentVariablesApi,
  BackfillApi,
  RuleSetsApi,
  MatchPoolsApi,
  MatchTicketsApi,
  MatchFunctionsApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Matchmaking = apis
