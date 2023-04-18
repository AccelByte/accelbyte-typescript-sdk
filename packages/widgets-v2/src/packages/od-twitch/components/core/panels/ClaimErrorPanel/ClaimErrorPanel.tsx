/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Typography } from '@od-components/components/Typography/Typography'
import { Trans } from 'react-i18next'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import './ClaimErrorPanel.scss'
import { FlatTwitchPrimaryButton } from '../../../common/Button/Button'
import classNames from 'classnames'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'
import { AppName } from '@od-shared/constants/ShConstants'

interface Props {
  onRetry: () => void
  className?: string
  logo?: string
  isMultipleGame?: boolean
}

export const ClaimErrorPanel: React.FC<Props> = ({ onRetry, className, logo, isMultipleGame }) => {
  const {
    state: { twitchDropData }
  } = useAppConfigs()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      title={<Trans i18nKey="TwitchDropPage.claim.error_panel.title">Oops… something went wrong</Trans>}
      className={classNames('claimErrorPanel', className)}>
      <TwitchCard isMultipleGame={isMultipleGame}>
        <div>
          <Typography tag="p">
            <Trans i18nKey="TwitchDropPage.claim.error.message1">There was a problem claiming your Twitch drop.</Trans>
          </Typography>
          <Typography tag="p">
            <Trans i18nKey="TwitchDropPage.claim.error.message2">
              If the problem persists, please try logging in again or contact our Customer Support.
            </Trans>
          </Typography>
        </div>
        <FlatTwitchPrimaryButton onClick={onRetry}>
          <Trans i18nKey="common.button.retry">Retry</Trans>
        </FlatTwitchPrimaryButton>
      </TwitchCard>
    </TwitchDropLayout>
  )
}
