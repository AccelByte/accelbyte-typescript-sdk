/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useEffect } from 'react'
import './StoreWidget.scss'

import bgCommon from '@od-assets/images/bg-common.svg'
import { DesktopChecker } from '@accelbyte/sdk'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

export interface StoreWidgetProps {
  children: ((props: { isSingleGame: boolean }) => JSX.Element) | JSX.Element
}

export function StoreWidget({ children }: StoreWidgetProps) {
  const {
    state: { isSingleGame }
  } = useDiscoveryConfigs()
  const {
    mutations: { fetchCurrencyMap }
  } = useCurrencyMap()

  // FIXME: revisit the usage of UIEvent stuff.
  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => UIEvent.updateBackground(null)
  // }, [])

  useEffect(() => {
    fetchCurrencyMap()
  }, [fetchCurrencyMap])

  return (
    <div className="storeWidget">
      <div className="storePageBg" style={!DesktopChecker.isDesktopApp() ? { backgroundImage: `url(${bgCommon})` } : undefined}>
        {typeof children === 'function' ? children({ isSingleGame }) : children}
      </div>
    </div>
  )
}
