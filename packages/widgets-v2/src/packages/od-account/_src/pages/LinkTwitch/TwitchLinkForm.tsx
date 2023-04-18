/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LinkedAccountsErrorAlert } from '@od-account/pages/LinkedAccountsPage/LinkedAccountsErrorAlert'
import { Button } from '@od-components/components/Button/Button'
import { TwitchIcon } from '@od-components/components/Icons/TwitchIcon'
import { ProfileImage } from '@od-components/components/ProfileImage/ProfileImage'
import { AccountConflictInformation } from '@od-shared/models/Linked'
import { LoginPath } from '@od-shared/routes/LoginPath'
import { UserResponseV3 } from '@accelbyte/sdk'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './TwitchLinkForm.module.scss'
import { TwitchFormContainer } from './TwitchPageLayout'

interface Props {
  user: UserResponseV3
  avatarURL: string
  onLink: () => void
  isLoading: boolean
  error: Error | unknown | null
  accountConflictInformation: AccountConflictInformation | null
}

export const TwitchLinkForm = (props: Props) => {
  const { user, avatarURL, isLoading, onLink, error, accountConflictInformation } = props
  return (
    <TwitchFormContainer className={styles.twitchFormContainer}>
      <h3>
        <Trans i18nKey="LinkTwitchPage.twitchLinkForm.title">Link to Twitch</Trans>
      </h3>
      <LinkedAccountsErrorAlert error={error} accountConflictInformation={accountConflictInformation} />
      <p className="instructionMessage">
        <Trans i18nKey="LinkTwitchPage.twitchLinkForm.instruction">To get the Drop items, please link your account with Twitch first</Trans>
      </p>
      <div className="userInfoContainer">
        <div className="profileImageContainer">
          <ProfileImage imageLink={avatarURL} className="profileImage" />
        </div>
        <div className="displayNameAndEmail">
          <div className="displayName">{user.displayName}</div>
          {!!user.emailAddress && <div className="email">{user.emailAddress}</div>}
        </div>
      </div>
      <div className="mb-4">
        <Trans i18nKey="LinkTwitchPage.twitchLinkForm.logout">
          Not you?{' '}
          <Link to={LoginPath.Logout.makePath()} className="btnLogout">
            Logout
          </Link>
        </Trans>
      </div>
      <div>
        <Button loadingIndicator="SPINNER" onClick={onLink} isLoading={isLoading} className="btnTwitch">
          <div className="btnItemContainer">
            <TwitchIcon />
            <span className="btnText">
              <Trans i18nKey="LinkTwitchPage.twitchLinkForm.linkButton">Link to Twitch</Trans>
            </span>
          </div>
        </Button>
      </div>
    </TwitchFormContainer>
  )
}
