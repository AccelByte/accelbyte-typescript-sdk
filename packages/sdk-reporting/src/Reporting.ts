/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ConfigurationsAdminApi } from './generated-admin/ConfigurationsAdminApi.js'
import { ExtensionCategoriesAndAutoModerationActionsAdminApi } from './generated-admin/ExtensionCategoriesAndAutoModerationActionsAdminApi.js'
import { ModerationRuleAdminApi } from './generated-admin/ModerationRuleAdminApi.js'
import { ReasonsAdminApi } from './generated-admin/ReasonsAdminApi.js'
import { ReportsAdminApi } from './generated-admin/ReportsAdminApi.js'
import { TicketsAdminApi } from './generated-admin/TicketsAdminApi.js'
import { PublicReasonsApi } from './generated-public/PublicReasonsApi.js'
import { PublicReportsApi } from './generated-public/PublicReportsApi.js'

console.log(`${name}@${version}`)

const apis = {
  ExtensionCategoriesAndAutoModerationActionsAdminApi,
  ModerationRuleAdminApi,
  ReasonsAdminApi,
  ReportsAdminApi,
  TicketsAdminApi,
  ConfigurationsAdminApi,
  PublicReasonsApi,
  PublicReportsApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Reporting = apis
