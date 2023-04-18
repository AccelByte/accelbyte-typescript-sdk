/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LINK_ACCOUNT_STATUS_TYPE, LINK_STATUS_SEARCH_PARAM_KEY } from '@od-account/pages/LinkPlatformAccount/common'
import { NoMatchingGameError } from '@od-components/components/ErrorPage/CommonError'
import { LoadingPage } from '@od-components/components/LoadingPage'
import { AlertType } from '@od-shared/models/Alert'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useHeaderAlerts } from '~/hooks/header/useHeaderAlerts'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useGames } from '~/hooks/platform/useGames'
import { useHistory } from '~/hooks/routes/useHistory'
import { AppStoreDetail } from '~/widgets/store/AppStoreDetail/AppStoreDetail'
import { Banner } from './Banner/Banner'
import { FeaturedGames } from './FeaturedGames/FeaturedGames'
import './HomePage.scss'

export const HomePage = () => {
  const { state: historyState } = useHistory()
  const {
    state: { isSingleGame }
  } = useDiscoveryConfigs()
  const { mutations: headerAlertsMutations } = useHeaderAlerts()

  useEffect(() => {
    const searchParam = new URLSearchParams(historyState.location?.search)
    const linkingAccountStatus = searchParam.get(LINK_STATUS_SEARCH_PARAM_KEY)

    if (!!linkingAccountStatus && linkingAccountStatus === LINK_ACCOUNT_STATUS_TYPE.success) {
      showLinkAccountSuccessAlert()
      searchParam.delete(LINK_STATUS_SEARCH_PARAM_KEY)
      historyState.replace(`${historyState.location.pathname}?${searchParam.toString()}`)
    }
  }, [historyState.location])

  const showLinkAccountSuccessAlert = () => {
    headerAlertsMutations.push({
      type: AlertType.success,
      element: <Trans i18nKey="LinkPlatformAccountPage.notification.accountLinked">Account linked</Trans>,
      autoDismiss: true
    })
  }

  return (
    <main className="homePage">
      {!isSingleGame && <MultiGameView />}
      {isSingleGame && <SingleGameView />}
    </main>
  )
}

const MultiGameView = () => {
  return (
    <>
      <Banner />
      <FeaturedGames />
      {/*
      TODO CW-1184
      {props.isSubscriptionsVisible && <Subscription />}
      */}
    </>
  )
}

const SingleGameView = () => {
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()
  const { state: activeGameState, mutations: activeGameMutations } = useGames()

  useEffect(() => {
    const appId = discoveryConfigData?.appId.data.value
    if (appId) {
      activeGameMutations.fetchItemInfo({ appId })
    }
  }, [discoveryConfigData?.appId.data.value])

  if (activeGameState.itemsInfoRecordFetchStatus === FetchStatus.FETCHING) {
    return <LoadingPage />
  }

  const appId = discoveryConfigData?.appId.data.value || ''
  const itemInfoError = appId && activeGameState.itemsInfoRecordError[appId]

  if (!activeGameState.activeGame?.itemId && itemInfoError) {
    return <NoMatchingGameError appId={appId} error={itemInfoError} />
  }

  return <AppStoreDetail itemId={activeGameState.activeGame?.itemId} />
}
