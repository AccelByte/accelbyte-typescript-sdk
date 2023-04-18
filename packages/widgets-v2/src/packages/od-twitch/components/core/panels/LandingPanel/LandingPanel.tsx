/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Trans } from 'react-i18next'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { Typography } from '@od-components/components/Typography/Typography'
import classNames from 'classnames'
import './LandingPanel.scss'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'

export interface LandingPanelProps {
  onLinkAccount: () => void
  onReclaim: () => void
  className?: string
}

export function LandingPanel({ onLinkAccount, onReclaim, className }: LandingPanelProps) {
  const {
    state: { twitchDropData, twitchDropGamesData }
  } = useAppConfigs()
  const streamerInfoData = twitchDropData?.streamerInfo.data
  const backgroundData = twitchDropData?.backgroundConfig.data
  const backgroundOverlay = backgroundData?.backgroundOverlay
  const backgroundURL = backgroundData?.background

  return (
    <div
      className={classNames('twitchDropLandingPage twitchDropLayout', className, {
        gradient: backgroundOverlay?.isEnabled && backgroundOverlay?.type === 'gradient',
        full: backgroundOverlay?.isEnabled && backgroundOverlay?.type === 'full'
      })}
      style={{ backgroundImage: `url("${backgroundURL}")` }}>
      <div className="relative">
        <Typography tag="h1" className="twitchDropLandingPage__title">
          <Trans i18nKey="TwitchDropPage.twitchDrops">Twitch Drops</Trans>
        </Typography>
        <div className="twitchDropLandingPage__subtitle">
          <Trans i18nKey="TwitchDropPage.landing.subtitle">
            <Typography tag="p">Participate on the event, watch Twitch streams, and earn rewards.</Typography>
            <Typography tag="p">Get started by linking your Twitch account.</Typography>
          </Trans>
        </div>
        <div className="twitchDropLandingPage__buttonGroup">
          <Button onClick={onLinkAccount}>
            <Trans i18nKey="TwitchDropPage.landing.linkAccount">Link Account</Trans>
          </Button>
          {streamerInfoData?.isStreamButtonEnabled && (
            <a href={UrlUtils.fixUrl(streamerInfoData?.streamButton.url)} target="_blank" rel="noreferrer">
              <Button buttonType={ButtonType.OUTLINED} buttonStyle={ButtonStyle.TEXT}>
                {streamerInfoData?.streamButton.label}
              </Button>
            </a>
          )}
        </div>
        {twitchDropGamesData && twitchDropGamesData.length > 0 && (
          <Typography tag="p" className="twitchDropLandingPage__bottomCta">
            <Trans i18nKey="TwitchDropPage.landing.bottomCta">
              Have problem claiming Twitch Drops? <button onClick={onReclaim}>Re-claim here</button>
            </Trans>
          </Typography>
        )}
      </div>
    </div>
  )
}
