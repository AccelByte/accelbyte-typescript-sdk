/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CircleCheckIcon } from '@od-components/components/Icons/CircleCheckIcon'
import React from 'react'
import { Trans } from 'react-i18next'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import './LinkedFormPanel.scss'
import { t } from '@od-components/i18n/index'
import { Typography } from '@od-components/components/Typography/Typography'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import classNames from 'classnames'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'
import { useAppState } from '~/hooks/useAppState'

interface Props {
  className?: string
  logo?: string
  isPreview?: boolean
  isMultipleGame?: boolean
}

const TWITCH_DROP_INVENTORY_URL = 'https://www.twitch.tv/drops/inventory'

export const LinkedFormPanel = ({ className, logo, isPreview, isMultipleGame }: Props) => {
  const {
    state: { twitchDropData }
  } = useAppConfigs()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')
  const appState = useAppState()

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      className={classNames('linkedFormPanel linkLayout', className)}>
      <TwitchCard isMultipleGame={isMultipleGame}>
        <Typography tag="h2">
          <Trans i18nKey="LinkTwitchPage.linkedFormPanel.title">Twitch Account Linked</Trans>
        </Typography>
        <CircleCheckIcon className="icon" checked fill />
        <Typography tag="p">
          <Trans i18nKey="LinkTwitchPage.linkedFormPanel.instruction">
            Your account is now linked to Twitch. To claim your Drop items, please go to Twitch Inventory page.
          </Trans>
        </Typography>
        {isPreview ? (
          <div className="btn btn-primary btnGoToInventory cursor-pointer">
            <Trans i18nKey="LinkTwitchPage.linkedFormPanel.goToInventory">Go To Twitch Inventory</Trans>
          </div>
        ) : (
          <a target="_blank" rel="noreferrer" href={TWITCH_DROP_INVENTORY_URL} className="btn btn-primary btnGoToInventory">
            <Trans i18nKey="LinkTwitchPage.linkedFormPanel.goToInventory">Go To Twitch Inventory</Trans>
          </a>
        )}
      </TwitchCard>
      <div className="btnLogout">
        <Button
          onClick={() => !isPreview && appState.logout()}
          buttonType={ButtonType.PLAIN}
          buttonStyle={ButtonStyle.TEXT}
          hasOutline={false}>
          {t('Navigation.links.logout')}
        </Button>
      </div>
    </TwitchDropLayout>
  )
}
