/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { DISCOVERY_TEMPLATE_NAME } from '@accelbyte/sdk/constants/DiscoveryTemplate'
import { DiscoveryConfigData } from '@accelbyte/sdk/models/configs/discovery'
import { Network } from '@accelbyte/sdk/utils/Network'
import { Templates$ } from '@accelbyte/sdk/generated-public/odin-config/Templates$'

/**
 * @internal
 */
export class PublicTemplateApi<ConfigKeysEnum extends string> {
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * @internal
   */
  getTemplateConfigs = (template: string) => {
    return this.newInstance().fetchConfigs_ByTemplate(template)
  }

  /**
   * @internal
   */
  getTemplateConfig = (template: string, configId: ConfigKeysEnum) => {
    return this.newInstance().fetchConfig_ByTemplate_ByConfig(template, configId)
  }

  /**
   * @internal
   */
  getDiscoveryTemplateConfigs = () => {
    return this.newInstance().fetchConfigs_ByTemplate<DiscoveryConfigData>(DISCOVERY_TEMPLATE_NAME)
  }

  private newInstance() {
    return new Templates$(Network.create(this.conf), this.namespace, this.cache)
  }
}
