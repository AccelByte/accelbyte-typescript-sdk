import 'dotenv/config'
import { AccelByte } from '@accelbyte/sdk'
import { EligibilitiesApi, Legal, LegalHelper } from '@accelbyte/sdk-legal'


const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: process.env.AB_BASE_URL || '',
    clientId: process.env.AB_CLIENT_ID || '',
    redirectURI: process.env.AB_REDIRECT_URI || '',
    namespace: process.env.AB_NAMESPACE || ''
  }
})

sdk.setToken({accessToken: '<user access token>'})

async function main() {
  console.info(sdk.assembly())

  let userEligibilities
  let unsignedPolicies
  try {
    const result = await EligibilitiesApi(sdk).getEligibility_ByNamespace()
    userEligibilities = result.data
    console.log('\n userEligibilities:', userEligibilities)

    unsignedPolicies = LegalHelper.getUnsignedPolicies(userEligibilities)
    console.log('\n unsignedPolicies:', unsignedPolicies)
  } catch (err) {
    handleError(err)
  }

  try {
    const unsignedPolicies = LegalHelper.getUnsignedPolicies(userEligibilities)
    console.log('\n unsignedPolicies:', unsignedPolicies)

    const acceptedAgreements = LegalHelper.getAcceptedPolicies(unsignedPolicies)
    console.log('\n acceptedAgreements:', acceptedAgreements)

    const acceptLegalPolicies = await Legal.AgreementApi(sdk).createAgreementPolicy(acceptedAgreements)
    console.log('\n acceptLegalPolicies:', acceptLegalPolicies)
  } catch (err) {
    handleError(err)
  }

  try {
    // --- Create Legal URL
    const LEGAL_WEB_URL = 'http://localhost:8080'
    const localizedPolicyVersionId = '<localizedPolicyVersionId>'
    const legalURL = LegalHelper.createLegalURL({legalBaseUrl: LEGAL_WEB_URL, policyId: localizedPolicyVersionId})
    console.log('\n legalURL:', legalURL)
  } catch (err) {
    handleError(err)
  }
}

function handleError(err) {
  if (err.response?.data) {
    console.log(err.response.data)
  } else {
    console.log(err)
  }
}

main()
