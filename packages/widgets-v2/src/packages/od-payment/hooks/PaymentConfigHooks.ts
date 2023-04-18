/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ConfigKeys } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

export const PaymentConfigHooks = { usePaymentConfig }

function usePaymentConfig() {
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()
  const {
    state: { paymentData },
    mutations: { fetchPaymentConfigs }
  } = useAppConfigs()

  return {
    state: {
      discoveryConfigData,
      pageConfig: paymentData?.[ConfigKeys.PAGE_CONFIG] || discoveryConfigData?.[ConfigKeys.GLOBAL_PAGE_CONFIG]
    },
    mutations: { fetchPaymentConfigs }
  }
}
