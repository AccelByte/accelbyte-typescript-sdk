/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { Trans } from 'react-i18next'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import './LoadingPanel.scss'
import { Loading } from '@od-components/components/Loading/Loading'
import classNames from 'classnames'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'

interface LayoutProps {
  logo?: string
  message: string
  className?: string
  isMultipleGame?: boolean
}

export function LoadingPanel(props: LayoutProps) {
  const { message, className, logo, isMultipleGame } = props
  const {
    state: { twitchDropData }
  } = useAppConfigs()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      className={classNames('loadingPanel', className)}
      title={message}>
      <TwitchCard className="loadingCard" isMultipleGame={isMultipleGame}>
        <div className="spinnerWrapper">
          <Loading loadingType="SPINNER" />
        </div>
        <div className="subMessageContainer">
          <span className="message">
            <Trans i18nKey="TwitchLoading.message">You will be redirected a few seconds</Trans>
          </span>
        </div>
      </TwitchCard>
    </TwitchDropLayout>
  )
}
