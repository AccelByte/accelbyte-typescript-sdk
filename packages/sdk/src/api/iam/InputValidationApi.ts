/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { InputValidations$ } from '@accelbyte/sdk/generated-public/iam/InputValidations$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class InputValidationsApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * <p>No role required</p>
   *    <p>This method is to get list of input validation configuration.</p>
   *    <p><code>regex</code> parameter will be returned if <code>isCustomRegex</code> is true. Otherwise, it will be empty.</p>
   *
   */
  getValidations = (languageCode?: string | null, defaultOnEmpty?: boolean | null) => {
    const queryParams = { languageCode, defaultOnEmpty }
    return this.newInstance().fetchIamV3PublicInputValidations(queryParams)
  }

  private newInstance() {
    return new InputValidations$(Network.create(this.conf), this.namespace, this.cache)
  }
}
