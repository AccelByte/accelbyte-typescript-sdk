import {Accelbyte} from '@accelbyte/sdk'
import {Iam, IamUserAuthorizationClient} from '@accelbyte/sdk-iam'
import {Platform} from '@accelbyte/sdk-platform'
import {Basic} from '@accelbyte/sdk-basic'

const sdk = Accelbyte.SDK({
    options: {
        baseURL: 'https://demo.accelbyte.io',
        clientId: '77f88506b6174c3ea4d925f5b4096ce8',
        namespace: 'accelbyte',
        redirectURI: 'http://localhost:3030'
    },
    onEvents: {
        // a callback function invoked on session expiry
        onSessionExpired: () => {
            console.log('SDK EVENT: USER SESSION EXPIRED')
        },
        // a callback function invoked on session retrieval
        onGetUserSession: (accessToken, refreshToken) => {
            console.log('SDK EVENT: USER SESSION REFRESHED')
        },
        // a callback function invoked on UserEligibilityChange
        onUserEligibilityChange: () => {
            console.log('SDK EVENT: USER ELIGIBILITY CHANGE')
        },
        // a callback function fired on error
        onError: (error) => {
            console.log('SDK EVENT: ERROR', error)
        }
    }
})

const accessToken = '<replace with accessToken for given baseURL>'

const bearerAuthConfig = {
    config: {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
}

// Sample SDK calls:
main()

async function main() {
    console.info(sdk.assembly())

    testCreateLoginURL()

    await testGetCurrencies()

    await testGetItems()

    // Below examples require authentication, ensure that you have logged in (have cookies)
    // or pass the access token to the `Authorization` header.
    if (accessToken.length < 1000) { // min jwt length
        throw Error('Please provide a valid accessToen')
    }

    await testGetNamespaces()

    await testGetUsersMe()

    await testGetUsersMeProfiles()
}

function testCreateLoginURL() {
    const loginUrl = new IamUserAuthorizationClient(sdk).createLoginURL()
    console.log('\n----\nOAuth login URL:\n', loginUrl)
}

async function testGetCurrencies() {
    const listOfCurrencies = await Platform.CurrencyApi(sdk).getCurrencies()
    console.info('\n----\nList Of Currencies:\n', listOfCurrencies)
}

async function testGetItems() {
    const listOfItems = await Platform.ItemApi(sdk).getItemsByCriteria({})
    console.info('\n----\nList of items:\n', listOfItems)
}

async function testGetNamespaces() {
    // GET /basic/v1/public/namespaces
    try {
        const listOfNamespaces = await Basic.NamespaceApi(sdk, bearerAuthConfig).getNamespaces()
        console.info('\n----\nList of namespaces:\n', listOfNamespaces)
    } catch (err) {
        console.log('\n----\n listOfNamespaces error\n', err.response)
    }
}

async function testGetUsersMe() {
    // GET /basic/v1/public/namespaces/accelbyte/users/me/profiles
    try {
        const currentUser = await Iam.UsersApi(sdk, bearerAuthConfig).getUsersMe()
        console.info('\n----\ncurrentUser:\n', currentUser)
    } catch (err) {
        console.log('\n----\n currentUser error\n', err.response.response)
    }
}

async function testGetUsersMeProfiles() {
    // GET /basic/v1/public/namespaces/accelbyte/users/me/profiles
    try {
        const userProfile = await Basic.UserProfileApi(sdk, bearerAuthConfig).getUsersMeProfiles()
        console.info('\n----\nuserProfile:\n', userProfile)
    } catch (err) {
        console.log('userProfile err', err)
    }
}