/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemInfo } from '@accelbyte/sdk-platform'
import React from 'react'
import { Trans } from 'react-i18next'
import './OpenLibraryLauncherButton.scss'
import { useGames } from '~/hooks/platform/useGames'
import { useHistory } from '~/hooks/routes/useHistory'
import { LauncherRouteUtils } from '~/utils/LauncherRouteUtils'

interface Props {
  item: ItemInfo
}

export const OpenLibraryLauncherButton = (props: Props) => {
  const {
    state,
    mutations: { setActiveGame, fetchItemInfo }
  } = useGames()
  const { state: history } = useHistory()

  const goToLauncherLibrary = async () => {
    const { item } = props
    if (item.appId) {
      const { error } = setActiveGame(state.itemsInfoRecord, item.appId)
      if (error) {
        // Item doesn't exist yet in the record. Fethc it so by the time we go to the main page,
        // it will show up immediately.
        await fetchItemInfo({ appId: item.appId })
      }

      history.push(LauncherRouteUtils.getV2WidgetAppPage('', item.appId))
    }
  }

  return (
    <button className="btn big btn-primary btnGoToLibrary" onClick={goToLauncherLibrary}>
      <Trans i18nKey="BaseStoreDetailCatalog.button.goToLibrary">GO TO LIBRARY</Trans>
    </button>
  )
}
