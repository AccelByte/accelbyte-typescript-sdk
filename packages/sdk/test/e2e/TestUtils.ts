/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Config } from '@accelbyte/sdk/generated-public/odin-config/definitions/Config'
import { z } from 'zod'

export const listConfig = ['listDiscoveryConfigs', 'listOfCurrencies', 'listOfItems', 'listOfNamespaces']

export const Configs = z.record(Config)

/*
 * If you're importing a file that contains an import statement it will getting an error message that says something like:
 * Error: Cannot find module '.\accelbyte-web-sdk\packages\sdk\src\generated-public\odin-config\definitions\Config'
 * imported from '.\accelbyte-web-sdk\packages\sdk\src\generated-public\odin-config\definitions\Configs.ts
 * This may be because of an issue with ESM (ES Modules) in Node.js when using "type": "module" in your package.json file.
 * so need to redeclare it from this
 */
export interface Configs extends z.TypeOf<typeof Configs> {}
