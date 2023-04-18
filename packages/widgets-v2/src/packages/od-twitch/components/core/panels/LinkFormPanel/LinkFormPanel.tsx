/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LinkedAccountsErrorAlert } from '@od-account/pages/LinkedAccountsPage/LinkedAccountsErrorAlert'
import { Button } from '@od-components/components/Button/Button'
import { TwitchIcon } from '@od-components/components/Icons/TwitchIcon'
import { AccountConflictInformation } from '@od-shared/models/Linked'
import React from 'react'
import { Trans } from 'react-i18next'
import './LinkFormPanel.scss'
import { TwitchCard } from '../../../common/cards/TwitchCard'
import { TwitchDropLayout } from '../../../common/layouts/TwitchDropLayout'
import { Typography } from '@od-components/components/Typography/Typography'
import { UserInfoCard } from '../../../common/UserInfoCard/UserInfoCard'
import classNames from 'classnames'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppState } from '~/hooks/useAppState'
import { UserResponseV3 } from '@accelbyte/sdk-iam'

interface Props {
  user: UserResponseV3
  avatarURL: string
  onLink: () => void
  isLoading: boolean
  error: Error | unknown | null
  accountConflictInformation: AccountConflictInformation | null
  className?: string
  logo?: string
  isPreview?: boolean
  isMultipleGame?: boolean
}

export const LinkFormPanel = (props: Props) => {
  const { user, avatarURL, isLoading, onLink, error, accountConflictInformation, logo, isPreview, isMultipleGame } = props
  const {
    state: { twitchDropData }
  } = useAppConfigs()
  const appState = useAppState()
  const { companyLogo } = useCompanyLogo(AppName.TWITCHDROP, 'header')

  return (
    <TwitchDropLayout
      backgroundOverlay={twitchDropData?.backgroundConfig.data.backgroundOverlay}
      backgroundURL={twitchDropData?.backgroundConfig.data.background}
      logo={logo || companyLogo}
      className={classNames('linkFormPanel linkLayout', props.className)}
      errorAlert={<LinkedAccountsErrorAlert error={error} accountConflictInformation={accountConflictInformation} />}>
      <TwitchCard isMultipleGame={isMultipleGame}>
        <Typography tag="h2">
          <Trans i18nKey="LinkTwitchPage.linkFormPanel.title">Link to Twitch</Trans>
        </Typography>
        <Typography tag="p" className="instructionMessage">
          <Trans i18nKey="LinkTwitchPage.linkFormPanel.instruction">
            To get the Drop items, please link your account with Twitch first
          </Trans>
        </Typography>
        <UserInfoCard
          withAvatar
          avatarURL={avatarURL}
          displayName={user.displayName}
          email={user.emailAddress}
          bottomCta={
            <Trans i18nKey="LinkTwitchPage.linkFormPanel.logout">
              Not you?{' '}
              <a className="btnLogout" onClick={() => !isPreview && appState.logout()}>
                Logout
              </a>
            </Trans>
          }
        />
        <Button loadingIndicator="SPINNER" onClick={onLink} isLoading={isLoading} className="btnTwitch">
          <div className="btnItemContainer">
            <TwitchIcon />
            <span className="btnText">
              <Trans i18nKey="LinkTwitchPage.linkFormPanel.linkButton">Link to Twitch</Trans>
            </span>
          </div>
        </Button>
      </TwitchCard>
    </TwitchDropLayout>
  )
}
