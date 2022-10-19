## Legal flow

1. After user Login the PP/Launcher need to get user information that including unsigned legal
2. If there is unsigned legal the PP/Launcher need blocked by Accept Legal Prompt Page
3. After use Accept Legal the PP/Launcher need to refresh user token


### Get unsigned Policies

```ts
// sdk here is the SDK instance that has been initiated
import { LegalHelper } from 'odin-web-sdk'

const eligibilities = sdk.legal.eligibilities()
const userElibilities = await eligibilities.getUserEligibilities({ namespace: Env.LEGAL_WEB_URL })
const unsignedPolicies = LegalHelper.getUnsignedPolicies(userElibilities.response.data)

```

### Bulk Accept Policies

When user accept legal policies it need to Accept all unsigned policies

```ts
// sdk here is the SDK instance that has been initiated
import { LegalHelper } from 'odin-web-sdk'

const acceptedAgreements = LegalHelper.getAcceptedPolicies(unsignedPolicies)
const agreement = sdk.legal.agreement()
const result = await agreement.acceptLegalPolicies(acceptedAgreements)

```

### Convert Policies to Displayed Policies

Convert Policies to displayed Policies that have return type:

```ts

{
  policyName: string,
  policyId: string,
  policyVersionId: string,
  localizedPolicyVersionId: string,
  isMandatory: boolean,
  description: string (optional),
  policyType: string (optional)
}

```

Usage:

```ts

import { LegalHelper } from 'odin-web-sdk'

const policiesByCountry = await this.legalState.fetchPoliciesList(countryCode)
const displayedPolicies = LegalHelper.convertPoliciesToDisplayedPolicies(policiesByCountry.response.data, Env.NAMESPACE)

```

### Create Legal URL

To get legal URL based on env variable `LEGAL_WEB_URL` and `localizedPolicyVersionId`, this used for redirecting to legal web

```ts

import { LegalHelper } from 'odin-web-sdk'
const legalURL = LegalHelper.createLegalURL(Env.LEGAL_WEB_URL, policy.localizedPolicyVersionId)

```
