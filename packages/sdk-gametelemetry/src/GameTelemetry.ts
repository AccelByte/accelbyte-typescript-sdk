/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { TelemetryAdminApi } from './generated-admin/TelemetryAdminApi.js'
import { GametelemetryOperationsApi } from './generated-public/GametelemetryOperationsApi.js'

console.log(`${name}@${version}`)

const apis = {
  TelemetryAdminApi,
  GametelemetryOperationsApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const GameTelemetry = apis
