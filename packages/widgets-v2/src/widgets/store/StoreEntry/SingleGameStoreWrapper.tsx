/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect } from 'react'
import { mockAppItemId, mockSingleGameInfo } from '@od-shared/mocks/MockVars'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { FetchStatus } from '~/constants/fetch-statuses'
import { SingleGameStoreLoadingScreen } from '@od-ecommerce/components/StatusElements/SingleGameStoreLoadingScreen'
import { SingleGameStoreError } from '@od-ecommerce/components/StatusElements/SingleGameStoreError'
import { useGames } from '~/hooks/platform/useGames'
import { NoMatchingGameError } from '@od-components/components/ErrorPage/CommonError'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { ConfigsUtils } from '~/utils/ConfigsUtils'
import { getCurrentLanguage } from '@od-components/i18n'
import { ItemInfo } from '@accelbyte/sdk-platform'

export interface SingleGameStoreWrapperChildrenProps {
  baseItem: ItemInfo | null
}

interface Props {
  isPreviewMode?: boolean
  children: ((props: SingleGameStoreWrapperChildrenProps) => React.ReactNode) | React.ReactNode
}

const store = createStoreForItemInfoStore()

export function SingleGameStoreWrapper({ isPreviewMode, children }: Props): JSX.Element {
  const { state: userState } = useUserInfo()
  const country = userState.user?.country

  const { state: discoveryConfigs } = useDiscoveryConfigs()
  const appId = ConfigsUtils.getAppId(discoveryConfigs.discoveryConfigData)
  const {
    state: { activeGame },
    mutations: { fetchItemInfo }
  } = useGames()
  const itemId = !isPreviewMode ? activeGame?.itemId : mockAppItemId

  const {
    state: { itemLocale: itemState, itemLocaleFetchStatus, itemLocaleError },
    mutations: { fetchItemLocale }
  } = useItemInfo(store)

  useEffect(() => {
    fetchItemInfo({ appId })
  }, [appId])

  useEffect(() => {
    fetchItemLocale({ itemId, language: getCurrentLanguage(), country })
  }, [fetchItemLocale, itemId, country])

  if (!itemId) {
    return (
      <NoMatchingGameError
        appId={appId || ''}
        // TODO: revisit this `error` prop once we have the gameStore and maybe
        // we want to icnrease the specificity of the `itemInfoRecordError` to also contain `Error` object.
        // error={Ctx.getGameState().getGameInfoError(appId)}
        error={null}
        isWithBackground={!DesktopChecker.isDesktopApp()}
      />
    )
  }

  const isInEditor = isPreviewMode
  const item = !isInEditor ? itemState : mockSingleGameInfo

  if (itemLocaleFetchStatus === FetchStatus.FETCHING) return <SingleGameStoreLoadingScreen />
  if (itemLocaleError) return <SingleGameStoreError error={itemLocaleError} />

  return typeof children === 'function' ? children({ baseItem: item }) : children
}
