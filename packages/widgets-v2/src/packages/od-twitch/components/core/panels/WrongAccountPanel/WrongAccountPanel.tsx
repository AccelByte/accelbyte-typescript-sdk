/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Typography } from '@od-components/components/Typography/Typography'
import { Trans } from 'react-i18next'
import { UserInfoCard } from '../../../common/UserInfoCard/UserInfoCard'
import { FlatTwitchPrimaryButton } from '../../../common/Button/Button'
import { ButtonStyle } from '@od-components/components/Button/Button'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'

interface Props {
  logo?: string
  displayName: string
  onRelogin: () => void
  className?: string
  isMultipleGame?: boolean
}

export const WrongAccountPanel = ({ displayName, logo, onRelogin, className, isMultipleGame }: Props) => {
  const {
    state: { twitchDropData }
  } = useAppConfigs()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      className={className}>
      <TwitchCard className="contentPanel" isMultipleGame={isMultipleGame}>
        <Typography tag="p">
          <Trans i18nKey="TwitchDropPage.panel.wrongAccount">
            You are logged in using different account, please re-login using Twitch account below:
          </Trans>
        </Typography>
        <UserInfoCard displayName={displayName} />
        <FlatTwitchPrimaryButton onClick={onRelogin} buttonStyle={ButtonStyle.PRIMARY}>
          <Trans i18nKey="TwitchDropPage.panel.relogin">RELOGIN</Trans>
        </FlatTwitchPrimaryButton>
      </TwitchCard>
    </TwitchDropLayout>
  )
}
