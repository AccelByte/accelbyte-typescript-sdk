/* 
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

// import { Accelbyte } from '@accelbyte/sdk'
import { config } from 'dotenv'

import { Accelbyte } from '../../src/AccelbyteSdkFactory'

config()

const SDK_CONFIG = {
  baseURL: 'https://demo.accelbyte.io',
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: 'http://localhost:3030'
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG
})

// Sample SDK calls:
main()

async function main() {
  console.info(SDK_CONFIG)

  // console.log(sdk.IAM.)
  console.log(sdk.IAM.UserAuthorization().createLoginURL())
  //
  // const listDiscoveryConfigs = await sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs()
  //
  // console.info('List of discovery configs:')
  // console.info(JSON.stringify(listDiscoveryConfigs))
  //
  // const listOfCurrencies = await sdk.Platform.Currency().getCurrencies()
  // const listOfItems = await sdk.Platform.Item().fetchItemsByCriteria({})
  //
  // console.info('List of namespaces:')
  // console.info(JSON.stringify(listOfCurrencies))
  //
  // console.info('List of items:')
  // console.info(JSON.stringify(listOfItems))
  //
  // // These require authentication and we can't use it right away.
  // // Ensure that you have logged in (have cookies) or pass the access token to the `Authorization` header.
  // const listOfNamespaces = sdk.Basic.Namespace({
  //   config: {
  //     headers: {
  //       Authorization: `Bearer <replace-this-with-access-token>`
  //     }
  //   }
  // }).getNamespaces()
  //
  // console.info('List of namespaces:')
  // console.info(JSON.stringify(listOfNamespaces))
}
