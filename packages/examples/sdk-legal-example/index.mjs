import {Accelbyte} from '@accelbyte/sdk'
import {Legal, LegalHelper} from "@accelbyte/sdk-legal";

const sdk = Accelbyte.SDK({
    options: {
        baseURL: 'https://demo.accelbyte.io',
        clientId: '77f88506b6174c3ea4d925f5b4096ce8',
        namespace: 'accelbyte',
        redirectURI: 'http://localhost:3030'
    }
})

const accessToken = '<user access token>'

// Sample SDK calls:
main()

async function main() {
    console.info(sdk.assembly())

    let userEligibilities
    let unsignedPolicies
    try {
        userEligibilities = await Legal.EligibilitiesApi(sdk, {
            config: {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            },
            namespace: 'accelbyte'
        }).getEligibility_ByNamespace()
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
        const legalURL = LegalHelper.createLegalURL(LEGAL_WEB_URL, localizedPolicyVersionId)
        console.log('\n legalURL:', legalURL)
    } catch (err) {
        handleError(err)
    }

    // const policiesByCountry = await this.legalState.getPoliciesList(countryCode)
    // const displayedPolicies = LegalHelper.convertPoliciesToDisplayedPolicies(policiesByCountry.response.data, Env.NAMESPACE)

}

function handleError(err) {
    if (err.response?.data) {
        console.log(err.response.data)
    } else {
        console.log(err)
    }
}