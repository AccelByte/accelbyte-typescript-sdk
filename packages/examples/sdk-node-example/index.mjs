import {Accelbyte} from '@accelbyte/sdk'
import {Iam, IamUserAuthorizationClient} from "@accelbyte/sdk-iam";
import {Platform} from "@accelbyte/sdk-platform";
import {Basic} from "@accelbyte/sdk-basic";

const sdk = Accelbyte.SDK({
    options: {
        baseURL: 'https://demo.accelbyte.io',
        clientId: '77f88506b6174c3ea4d925f5b4096ce8',
        namespace: 'accelbyte',
        redirectURI: 'http://localhost:3030'
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

    const loginUrl = new IamUserAuthorizationClient(sdk).createLoginURL()
    console.log('\nOAuth login URL:', loginUrl)

    const listOfCurrencies = await Platform.CurrencyApi(sdk).getCurrencies()
    const listOfItems = await Platform.ItemApi(sdk).getItemsByCriteria({})

    console.info('\n List Of Currencies:')
    console.info(JSON.stringify(listOfCurrencies))

    console.info('\n List of items:')
    console.info(JSON.stringify(listOfItems))

    // These require authentication and we can't use it right away.
    // Ensure that you have logged in (have cookies) or pass the access token to the `Authorization` header.
    try {
        const listOfNamespaces = await Basic.NamespaceApi(sdk, bearerAuthConfig).getNamespaces()

        console.info('\n List of namespaces:')
        console.info(JSON.stringify(listOfNamespaces))
    } catch (err) {
        console.log('listOfNamespaces err', err)
    }

    // /basic/v1/public/namespaces/accelbyte/users/me/profiles
    try {
        const currentUser = await Iam.UsersApi(sdk, bearerAuthConfig).getUsersMe()

        console.info('\n currentUser:')
        console.info(JSON.stringify(currentUser))
    } catch (err) {
        console.log('userProfile err', err)
    }

    // /basic/v1/public/namespaces/accelbyte/users/me/profiles
    try {
        const userProfile = await Basic.UserProfileApi(sdk, bearerAuthConfig).getUsersMeProfiles()

        console.info('\n userProfile:')
        console.info(JSON.stringify(userProfile))
    } catch (err) {
        console.log('userProfile err', err)
    }

}