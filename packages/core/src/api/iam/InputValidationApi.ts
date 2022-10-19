/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { InputValidations$ } from '@od-web-sdk/generated-public/iam/InputValidations$'
import { Network } from '@od-web-sdk/utils/Network'

export class InputValidationsApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new InputValidations$(Network.create(this.conf), this.namespace, this.cache)
  }

  getValidations = (languageCode?: string | null, defaultOnEmpty?: boolean | null) => {
    const queryParams = { languageCode, defaultOnEmpty }
    return this.newInstance().fetchIamV3PublicInputValidations(queryParams)
  }
}
