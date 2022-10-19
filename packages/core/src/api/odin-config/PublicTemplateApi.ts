/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { DISCOVERY_TEMPLATE_NAME } from '@od-web-sdk/constants/DiscoveryTemplate'
import { Templates$ } from '@od-web-sdk/generated-public/odin-config/Templates$'
import { DiscoveryConfigData } from '@od-web-sdk/models/DiscoveryConfigData'
import { Network } from '@od-web-sdk/utils/Network'

export class PublicTemplateApi<ConfigKeysEnum extends string> {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Templates$(Network.create(this.conf), this.namespace, this.cache)
  }

  // Configs.
  getTemplateConfigs = (template: string) => {
    return this.newInstance().fetchV1TemplatesByTemplateConfigs(template)
  }

  getTemplateConfig = (template: string, configId: ConfigKeysEnum) => {
    return this.newInstance().fetchV1TemplatesByTemplateConfigsByConfig(template, configId)
  }

  getDiscoveryTemplateConfigs = () => {
    return this.newInstance().fetchV1TemplatesByTemplateConfigs<DiscoveryConfigData>(DISCOVERY_TEMPLATE_NAME)
  }
}
