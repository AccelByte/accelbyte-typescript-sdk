## GET /agreement/public/readiness

```
import { AccelByte } from '@accelbyte/sdk'
import { UtilityApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UtilityApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getReadiness()

// return Promise<LegalReadinessStatusResponse>
```

## GET /agreement/public/agreements/policies

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgreementsPolicies()

// return Promise<RetrieveAcceptedAgreementResponseArray>
```

## POST /agreement/public/agreements/policies

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAgreementPolicy(data: {
             AcceptAgreementRequest[]
    })

// return Promise<AcceptAgreementResponse>
```

## GET /agreement/public/policies/countries/list

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesApi(sdk)
  .getPoliciesCountriesList()

// return Promise
```

## GET /agreement/public/policies/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPolicy_ByNamespace( queryParams?: {
             alwaysIncludeDefault?: boolean | null,
             defaultOnEmpty?: boolean | null,
             policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE',
             tags?: string | null,
             visibleOnly?: boolean | null
    })

// return Promise<RetrievePolicyPublicResponseArray>
```

## GET /agreement/public/policies/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesApi(sdk)
  .getPolicyCountry_ByCountryCode(countryCode:string,  queryParams?: {
             defaultOnEmpty?: boolean | null,
             policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE',
             tags?: string | null,
             visibleOnly?: boolean | null
    })

// return Promise<RetrievePolicyPublicResponseArray>
```

## POST /agreement/public/agreements/policies/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAgreementPolicyUser_ByUserId(userId:string, data: {
             AcceptAgreementRequest[]
    })

// return Promise<AcceptAgreementResponse>
```

## GET /agreement/public/eligibilities/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { EligibilitiesApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EligibilitiesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEligibility_ByNamespace()

// return Promise<RetrieveUserEligibilitiesResponseArray>
```

## PATCH /agreement/public/agreements/localized-policy-versions/preferences

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAgreementLocalizedPolicyVersionPreference(data: {
             AcceptAgreementRequest[]
    })

// return Promise
```

## GET /agreement/public/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsApi(sdk)
  .getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise<RetrieveLocalizedPolicyVersionPublicResponse>
```

## GET /agreement/public/policies/namespaces/{namespace}/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesApi(sdk)
  .getPolicyCountry_ByCountryCode_ByNS(countryCode:string,  queryParams?: {
             alwaysIncludeDefault?: boolean | null,
             defaultOnEmpty?: boolean | null,
             policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE',
             tags?: string | null,
             visibleOnly?: boolean | null
    })

// return Promise<RetrievePolicyPublicResponseArray>
```

## POST /agreement/public/agreements/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise
```

## GET /agreement/public/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceApi(sdk)
  .getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise<RetrieveLocalizedPolicyVersionPublicResponse>
```

## GET /agreement/public/eligibilities/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { EligibilitiesApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EligibilitiesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUserEligibility_ByCountryCode_ByClientId_ByUserId(countryCode:string, clientId:string, userId:string)

// return Promise<RetrieveUserEligibilitiesIndirectResponse>
```

## POST /agreement/public/agreements/policies/namespaces/{namespace}/countries/{countryCode}/clients/{clientId}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(countryCode:string, clientId:string, userId:string, data: {
             AcceptAgreementRequest[]
    })

// return Promise<AcceptAgreementResponse>
```

## DELETE /agreement/admin/userInfo

```
import { AccelByte } from '@accelbyte/sdk'
import { UserInfoAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserInfoAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserInfo( queryParams?: {
             namespace?: string | null
    })

// return Promise
```

## GET /agreement/admin/userInfo

```
import { AccelByte } from '@accelbyte/sdk'
import { UserInfoAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserInfoAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUserInfo( queryParams?: {
             namespaces?: string | null
    })

// return Promise<RetrieveUserInfoCacheStatusResponseArray>
```

## PUT /agreement/admin/userInfo

```
import { AccelByte } from '@accelbyte/sdk'
import { UserInfoAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserInfoAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserInfo( queryParams: {
             namespace: string | null
    })

// return Promise
```

## GET /agreement/admin/policy-types

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPolicyTypes( queryParams: {
             limit: number,
             offset?: number
    })

// return Promise<RetrievePolicyTypeResponseArray>
```

## GET /agreement/admin/base-policies

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBasePolicies( queryParams?: {
             visibleOnly?: boolean | null
    })

// return Promise<RetrieveBasePolicyResponseArray>
```

## POST /agreement/admin/base-policies

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBasePolicy(data: {
             CreateBasePolicyRequest
    })

// return Promise<CreateBasePolicyResponse>
```

## PATCH /agreement/admin/policies/{policyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPolicy_ByPolicyId(policyId:string, data: {
             UpdatePolicyRequest
    })

// return Promise
```

## PATCH /agreement/admin/policies/{policyId}/default

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDefault_ByPolicyId(policyId:string)

// return Promise
```

## GET /agreement/admin/base-policies/{basePolicyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBasePolicy_ByBasePolicyId(basePolicyId:string)

// return Promise<RetrieveBasePolicyResponse>
```

## PATCH /agreement/admin/base-policies/{basePolicyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBasePolicy_ByBasePolicyId(basePolicyId:string, data: {
             UpdateBasePolicyRequest
    })

// return Promise<UpdateBasePolicyResponse>
```

## GET /agreement/admin/policies/{policyId}/versions

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersions_ByPolicyId(policyId:string,  queryParams?: {
             versionId?: string | null
    })

// return Promise<RetrievePolicyVersionResponseArray>
```

## POST /agreement/admin/policies/{policyId}/versions

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createVersion_ByPolicyId(policyId:string, data: {
             CreatePolicyVersionRequest
    })

// return Promise<CreatePolicyVersionResponse>
```

## GET /agreement/admin/agreements/policy-versions/users

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgreementsPolicyVersionsUsers( queryParams: {
             policyVersionId: string | null,
             keyword?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<PagedRetrieveUserAcceptedAgreementResponse>
```

## GET /agreement/admin/policies/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPolicyCountry_ByCountryCode(countryCode:string)

// return Promise<RetrievePolicyResponseArray>
```

## POST /agreement/admin/namespaces/{namespace}/agreements

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAgreement(data: {
             UsersAgreementsRequest
    })

// return Promise<UserAgreementsResponseArray>
```

## GET /agreement/admin/agreements/policies/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgreementPolicyUser_ByUserId(userId:string)

// return Promise<RetrieveAcceptedAgreementResponseArray>
```

## GET /agreement/admin/namespaces/{namespace}/policy-types

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPolicyTypes( queryParams: {
             limit: number,
             offset?: number
    })

// return Promise<RetrievePolicyTypeResponseArray>
```

## PATCH /agreement/admin/policies/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPolicyVersion_ByPolicyVersionId(policyVersionId:string, data: {
             UpdatePolicyVersionRequest
    })

// return Promise<UpdatePolicyVersionResponse>
```

## GET /agreement/admin/namespaces/{namespace}/base-policies

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBasePolicies( queryParams?: {
             visibleOnly?: boolean | null
    })

// return Promise<RetrieveBasePolicyResponseArray>
```

## POST /agreement/admin/namespaces/{namespace}/base-policies

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBasePolicy(data: {
             CreateBasePolicyRequestV2
    })

// return Promise<CreateBasePolicyResponse>
```

## DELETE /agreement/admin/users/{userId}/anonymization/agreements

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAnonymizationAgreement_ByUserId(userId:string)

// return Promise
```

## DELETE /agreement/admin/namespaces/{namespace}/policies/{policyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePolicy_ByPolicyId(policyId:string)

// return Promise
```

## PATCH /agreement/admin/namespaces/{namespace}/policies/{policyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPolicy_ByPolicyId(policyId:string, data: {
             UpdatePolicyRequest
    })

// return Promise
```

## PATCH /agreement/admin/policies/versions/{policyVersionId}/latest

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchLatestPolicy_ByPolicyVersionId(policyVersionId:string,  queryParams?: {
             shouldNotify?: boolean | null
    })

// return Promise
```

## PATCH /agreement/admin/namespaces/{namespace}/policies/{policyId}/default

```
import { AccelByte } from '@accelbyte/sdk'
import { PoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDefault_ByPolicyId(policyId:string)

// return Promise
```

## DELETE /agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBasePolicy_ByBasePolicyId(basePolicyId:string)

// return Promise
```

## GET /agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBasePolicy_ByBasePolicyId(basePolicyId:string)

// return Promise<RetrieveBasePolicyResponse>
```

## PATCH /agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBasePolicy_ByBasePolicyId(basePolicyId:string, data: {
             UpdateBasePolicyRequestV2
    })

// return Promise<UpdateBasePolicyResponse>
```

## GET /agreement/admin/namespaces/{namespace}/policies/{policyId}/versions

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getVersions_ByPolicyId(policyId:string,  queryParams?: {
             versionId?: string | null
    })

// return Promise<RetrievePolicyVersionResponseArray>
```

## POST /agreement/admin/namespaces/{namespace}/policies/{policyId}/versions

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createVersion_ByPolicyId(policyId:string, data: {
             CreatePolicyVersionRequest
    })

// return Promise<CreatePolicyVersionResponse>
```

## GET /agreement/admin/namespaces/{namespace}/users/{userId}/eligibilities

```
import { AccelByte } from '@accelbyte/sdk'
import { UserEligibilitiesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserEligibilitiesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEligibilities_ByUserId(userId:string,  queryParams: {
             clientId: string | null,
             countryCode: string | null,
             publisherUserId?: string | null
    })

// return Promise<RetrieveUserEligibilitiesIndirectResponse>
```

## GET /agreement/admin/base-policies/{basePolicyId}/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCountry_ByBasePolicyId_ByCountryCode(basePolicyId:string, countryCode:string)

// return Promise<RetrievePolicyResponse>
```

## GET /agreement/admin/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise<RetrieveLocalizedPolicyVersionResponse>
```

## PUT /agreement/admin/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string, data: {
             UpdateLocalizedPolicyVersionRequest
    })

// return Promise<UpdateLocalizedPolicyVersionResponse>
```

## GET /agreement/admin/localized-policy-versions/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId:string)

// return Promise<RetrieveLocalizedPolicyVersionResponseArray>
```

## POST /agreement/admin/localized-policy-versions/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId:string, data: {
             CreateLocalizedPolicyVersionRequest
    })

// return Promise<CreateLocalizedPolicyVersionResponse>
```

## GET /agreement/admin/namespaces/{namespace}/agreements/policy-versions/users

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgreementsPolicyVersionsUsers( queryParams: {
             policyVersionId: string | null,
             convertGameUserId?: boolean | null,
             keyword?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<PagedRetrieveUserAcceptedAgreementResponse>
```

## GET /agreement/admin/namespaces/{namespace}/agreements/policies/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgreementPolicyUser_ByUserId(userId:string,  queryParams?: {
             excludeOtherNamespacesPolicies?: boolean | null
    })

// return Promise<RetrieveAcceptedAgreementResponseArray>
```

## POST /agreement/admin/namespaces/{namespace}/users/{userId}/agreements/policies

```
import { AccelByte } from '@accelbyte/sdk'
import { UserAgreementAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserAgreementAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAgreementPolicy_ByUserId(userId:string, data: {
             AcceptAgreementRequest[],
             queryParams: {
             clientId: string | null,
             countryCode: string | null,
             publisherUserId?: string | null
    })

// return Promise<AcceptAgreementResponse>
```

## DELETE /agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePolicyVersion_ByPolicyVersionId(policyVersionId:string)

// return Promise
```

## PATCH /agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchPolicyVersion_ByPolicyVersionId(policyVersionId:string, data: {
             UpdatePolicyVersionRequest
    })

// return Promise<UpdatePolicyVersionResponse>
```

## PATCH /agreement/admin/localized-policy-versions/{localizedPolicyVersionId}/default

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise
```

## GET /agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}/policies

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPolicies_ByBasePolicyId(basePolicyId:string)

// return Promise<RetrievePoliciesFromBasePolicyResponseArray>
```

## POST /agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}/policies

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPolicy_ByBasePolicyId(basePolicyId:string, data: {
             CreatePolicyRequest
    })

// return Promise<CreatePolicyResponse>
```

## POST /agreement/admin/localized-policy-versions/{localizedPolicyVersionId}/attachments

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAttachment_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string, data: {
             UploadPolicyVersionAttachmentRequest
    })

// return Promise<UploadLocalizedPolicyVersionAttachmentResponse>
```

## PATCH /agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}/latest

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchLatestPolicy_ByPolicyVersionId(policyVersionId:string,  queryParams?: {
             shouldNotify?: boolean | null
    })

// return Promise
```

## PATCH /agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}/unpublish

```
import { AccelByte } from '@accelbyte/sdk'
import { PolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUnpublishPolicy_ByPolicyVersionId(policyVersionId:string)

// return Promise
```

## GET /agreement/admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgreementsPolicyVersionsUsersExportCsvDownload( queryParams: {
             exportId: string | null
    })

// return Promise<DownloadExportedAgreementsInCsvResponse>
```

## POST /agreement/admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/initiate

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAgreementPolicyVersionUserExportCsvInitiate( queryParams: {
             policyVersionId: string | null,
             start: string | null,
             end?: string | null
    })

// return Promise<InitiateExportAgreementsToCsvResponse>
```

## GET /agreement/admin/namespaces/{namespace}/base-policies/{basePolicyId}/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { BaseLegalPoliciesWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BaseLegalPoliciesWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCountry_ByBasePolicyId_ByCountryCode(basePolicyId:string, countryCode:string)

// return Promise<RetrievePolicyResponse>
```

## GET /agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise<RetrieveLocalizedPolicyVersionResponse>
```

## PUT /agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string, data: {
             UpdateLocalizedPolicyVersionRequest
    })

// return Promise<UpdateLocalizedPolicyVersionResponse>
```

## GET /agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId:string)

// return Promise<RetrieveLocalizedPolicyVersionResponseArray>
```

## POST /agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{policyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId:string, data: {
             CreateLocalizedPolicyVersionRequest
    })

// return Promise<CreateLocalizedPolicyVersionResponse>
```

## PATCH /agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}/default

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise
```

## DELETE /agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{localizedPolicyVersionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLocalizedPolicyVersionVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string)

// return Promise
```

## PATCH /agreement/admin/agreements/localized-policy-versions/preferences/namespaces/{namespace}/userId/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { AgreementAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AgreementAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(userId:string, data: {
             AcceptAgreementRequest[]
    })

// return Promise
```

## POST /agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}/attachments

```
import { AccelByte } from '@accelbyte/sdk'
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '@accelbyte/sdk-legal'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createAttachment_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string, data: {
             UploadPolicyVersionAttachmentRequest
    })

// return Promise<UploadLocalizedPolicyVersionAttachmentResponse>
```