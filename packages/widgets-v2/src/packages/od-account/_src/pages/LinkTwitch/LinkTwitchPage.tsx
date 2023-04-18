/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Loading } from '@od-components/components/Loading/Loading'
import { t } from '@od-components/i18n/index'
import { AccPath } from '@od-shared/routes/AccPath'
import { LoginPath } from '@od-shared/routes/LoginPath'
import { AppState } from '@od-shared/store/AppState'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { LinkedAccountsAppManager } from '@od-state/managers/LinkedAccountsAppManager'
import { LinkTwitchAppManager } from '@od-state/managers/LinkTwitchAppManager'
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import styles from './LinkTwitchPage.module.scss'
import { TwitchLinkedForm } from './TwitchLinkedForm'
import { TwitchLinkForm } from './TwitchLinkForm'
import { TwitchFormContainer, TwitchPageLayout } from './TwitchPageLayout'

interface Props extends RouteComponentProps {
  appState: AppState
}

class LinkTwitchPage extends React.Component<Props> {
  private readonly linkTwitchManager: LinkTwitchAppManager
  private readonly linkedAccountManager: LinkedAccountsAppManager

  constructor(props: Props) {
    super(props)

    this.linkTwitchManager = this.props.appState.linkTwitchManager
    this.linkTwitchManager.subscribe(() => this.setState({}))
    this.linkedAccountManager = this.props.appState.linkAccountManager
    this.linkedAccountManager.subscribe(() => this.setState({}))
  }

  async componentDidMount() {
    const user = this.props.appState.getUser()
    if (!user) {
      this.tryLogin()
      return
    }

    if (this.props.location.search) {
      this.requestStatus()
    }

    if (!this.linkTwitchManager.state.linkedTwitchAccount) {
      try {
        const twitchAccount = await this.linkTwitchManager.fetchLinkedTwitchAccount(user.userId)
        if (twitchAccount) {
          const platformToken = await this.linkTwitchManager.getTwitchPlatformToken(user.userId)
          if (platformToken.platform_token) return
          this.linkAccount()
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  requestStatus = async () => {
    const requestId = this.getRequestId()
    const user = this.props.appState.getUser()
    if (requestId && user) {
      try {
        await this.linkedAccountManager.requestStatus(requestId)
        this.props.appState.state.appHistory.replace(this.props.location.pathname)
      } catch (error) {
        console.error(error)
      }
    }
  }

  tryLogin() {
    const loginURL = this.props.appState.getSdk().IAM.UserAuthorization().createLoginURL(AccPath.TwitchLinking.makePath())
    window.location.replace(loginURL)
  }

  getRequestId = (): string | null => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get('requestId') || null
  }

  linkAccount = () => {
    const { location, appState } = this.props
    const redirectUri = UrlUtils.getRedirectUrl(appState.sdkOptions.redirectURI, location.pathname)
    this.linkTwitchManager.getTwitchURL(redirectUri, appState.sdkOptions.clientId).then(url => {
      if (url) {
        window.location.href = url
      }
    })
  }

  render() {
    const { linkedTwitchAccount, isFetchingToken, isFetchingLoginURL, isFetchingLinkedTwitchAccount } = this.linkTwitchManager.state
    const { isFetchingProfile, userProfile } = this.props.appState.userAppManager.state
    const { isLinking, error, accountConflictInformation } = this.linkedAccountManager.state
    const isLoading = isLinking || isFetchingLinkedTwitchAccount || isFetchingToken || isFetchingProfile
    const user = this.props.appState.getUser()
    return (
      <TwitchPageLayout>
        {isLoading && (
          <TwitchFormContainer>
            <Loading />
          </TwitchFormContainer>
        )}
        {!isLoading && !!user && (
          <>
            {!linkedTwitchAccount ? (
              <TwitchLinkForm
                user={user}
                avatarURL={userProfile?.avatarUrl || ''}
                onLink={this.linkAccount}
                isLoading={isFetchingLoginURL}
                error={error}
                accountConflictInformation={accountConflictInformation}
              />
            ) : (
              <>
                <TwitchLinkedForm />
                <div className={styles.btnContainer}>
                  <Link to={LoginPath.Logout.makePath()} className={styles.btnLogout}>
                    {t('Navigation.links.logout')}
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </TwitchPageLayout>
    )
  }
}

export default LinkTwitchPage
