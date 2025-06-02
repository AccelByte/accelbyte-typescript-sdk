/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AgreementAdminApi } from './generated-admin/AgreementAdminApi.js'
import { AgreementWithNamespaceAdminApi } from './generated-admin/AgreementWithNamespaceAdminApi.js'
import { AnonymizationAdminApi } from './generated-admin/AnonymizationAdminApi.js'
import { BaseLegalPoliciesAdminApi } from './generated-admin/BaseLegalPoliciesAdminApi.js'
import { BaseLegalPoliciesWithNamespaceAdminApi } from './generated-admin/BaseLegalPoliciesWithNamespaceAdminApi.js'
import { LocalizedPolicyVersionsAdminApi } from './generated-admin/LocalizedPolicyVersionsAdminApi.js'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from './generated-admin/LocalizedPolicyVersionsWithNamespaceAdminApi.js'
import { PoliciesAdminApi } from './generated-admin/PoliciesAdminApi.js'
import { PoliciesWithNamespaceAdminApi } from './generated-admin/PoliciesWithNamespaceAdminApi.js'
import { PolicyVersionsAdminApi } from './generated-admin/PolicyVersionsAdminApi.js'
import { PolicyVersionsWithNamespaceAdminApi } from './generated-admin/PolicyVersionsWithNamespaceAdminApi.js'
import { UserAgreementAdminApi } from './generated-admin/UserAgreementAdminApi.js'
import { UserEligibilitiesAdminApi } from './generated-admin/UserEligibilitiesAdminApi.js'
import { UserInfoAdminApi } from './generated-admin/UserInfoAdminApi.js'
import { AgreementApi } from './generated-public/AgreementApi.js'
import { EligibilitiesApi } from './generated-public/EligibilitiesApi.js'
import { LocalizedPolicyVersionsApi } from './generated-public/LocalizedPolicyVersionsApi.js'
import { LocalizedPolicyVersionsWithNamespaceApi } from './generated-public/LocalizedPolicyVersionsWithNamespaceApi.js'
import { PoliciesApi } from './generated-public/PoliciesApi.js'
import { PoliciesWithNamespaceV2Api } from './generated-public/PoliciesWithNamespaceV2Api.js'
import { UtilityApi } from './generated-public/UtilityApi.js'

console.log(`${name}@${version}`)

const apis = {
  UserInfoAdminApi,
  BaseLegalPoliciesAdminApi,
  PoliciesAdminApi,
  PolicyVersionsAdminApi,
  AgreementAdminApi,
  AgreementWithNamespaceAdminApi,
  BaseLegalPoliciesWithNamespaceAdminApi,
  AnonymizationAdminApi,
  PoliciesWithNamespaceAdminApi,
  PolicyVersionsWithNamespaceAdminApi,
  UserEligibilitiesAdminApi,
  LocalizedPolicyVersionsAdminApi,
  UserAgreementAdminApi,
  LocalizedPolicyVersionsWithNamespaceAdminApi,
  UtilityApi,
  AgreementApi,
  PoliciesApi,
  EligibilitiesApi,
  LocalizedPolicyVersionsApi,
  PoliciesWithNamespaceV2Api,
  LocalizedPolicyVersionsWithNamespaceApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Legal = apis
