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
import { GameSessionDetailAdminApi } from './generated-admin/GameSessionDetailAdminApi.js'
import { XRayAdminApi } from './generated-admin/XRayAdminApi.js'
import { GameSessionDetailApi } from './generated-public/GameSessionDetailApi.js'

console.log(`${name}@${version}`)

const apis = {
  ConfigAdminApi,
  GameSessionDetailAdminApi,
  XRayAdminApi,
  GameSessionDetailApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const SessionHistory = apis
