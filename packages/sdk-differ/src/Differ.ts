/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { DiffCalculationApi } from './generated-public/DiffCalculationApi.js'

console.log(`${name}@${version}`)

const apis = {
  DiffCalculationApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Differ = apis
