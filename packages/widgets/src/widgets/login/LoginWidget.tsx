/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LoginButtonContainer } from '@od-components/components/Header/LoginButtonContainer'
import { UserProfileContainer } from '@od-components/components/Header/UserProfileContainer'
import { UserProfileNavContainer } from '@od-components/components/Header/UserProfileNavContainer'
import { Ctx } from '@od-shared/Ctx'
import { ErrorPath } from '@od-shared/routes/ErrorPath'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
import { UserAppManager } from '@od-state/managers/UserAppManager'
import { UserResponseV3, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import React from 'react'
import './LoginWidget.scss'
import { isInIframe } from '@od-shared/utils/IframeHelper'

interface Props {
  onLogout?: () => void
  // When the `user` is null, it means that the user isn't logged in .
  onUpdateUser?: (user: UserResponseV3 | null) => void
  isDisableUsername?: boolean
}

interface State {
  dropdownProfileOpen: boolean
}

export class LoginWidget extends React.Component<Props, State> {
  dropdownToggleProfileRef: React.RefObject<HTMLDivElement>
  private userAppManager: UserAppManager
  private previousUser: UserResponseV3 | null

  constructor(props: Props) {
    super(props)
    this.state = {
      dropdownProfileOpen: false
    }

    this.previousUser = null
    this.userAppManager = Ctx.getAppState().userAppManager
    this.userAppManager.subscribe(() => {
      if (this.previousUser !== this.userAppManager.state.user && props.onUpdateUser) {
        // Propagate the value of `this.userAppManager.state.user` when it's different, be it
        // `null` (logged out) or not `null` (logged in).
        props.onUpdateUser(this.userAppManager.state.user)
        this.previousUser = this.userAppManager.state.user
      }

      this.setState({})
    })
    this.dropdownToggleProfileRef = React.createRef()
  }

  componentDidMount() {
    if (this.userAppManager.state.user && this.props.onUpdateUser) {
      this.props.onUpdateUser(this.userAppManager.state.user)
    }

    window.addEventListener('click', this.toggleMenuOff)
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.toggleMenuOff)
  }

  onLoginClick = (returnPath?: string | null) => {
    let returnPathLocation: string | undefined
    if (returnPath) {
      const isInErrorPage = ErrorPath.ErrorRoot.is(returnPath)
      returnPathLocation = (!isInErrorPage && returnPath) || undefined
    }
    const loginURL = new IamUserAuthorizationClient(Ctx.getAppState().getSdk()).createLoginURL(returnPathLocation)
    if (isInIframe()) {
      window.parent.location.replace(loginURL)
      return
    }
    window.location.replace(loginURL)
  }

  onLogoutClick = async () => {
    const { onLogout } = this.props
    await this.userAppManager.logout()
    await this.userAppManager.clear()
    Ctx.getAppState().state.appHistory.replace(GlobalPath.Home.link)
    if (onLogout) {
      onLogout()
    }
  }

  toggleMenuOff = (event: MouseEvent) => {
    if (this.state.dropdownProfileOpen && !event.composedPath().includes(this.dropdownToggleProfileRef.current as EventTarget)) {
      this.setState({ dropdownProfileOpen: false })
    }
  }

  toggleProfileMenu = () => {
    this.setState({ dropdownProfileOpen: !this.state.dropdownProfileOpen })
  }

  render() {
    const { isDisableUsername } = this.props
    const { dropdownProfileOpen } = this.state
    const { user, isFetchingProfile, errorFetchingProfile, userProfile } = this.userAppManager.state
    const redirectUriPathname = new URL(Ctx.getAppState().sdkOptions.redirectURI).pathname
    const currentLocation = window.location.pathname
    const loginReturnPath = currentLocation.replace(redirectUriPathname, '')
    const walletAppManager = Ctx.getAppState().walletAppManager

    return (
      <div className="loginWidget">
        {!user && <LoginButtonContainer currentLocation={currentLocation} onLogin={() => this.onLoginClick(loginReturnPath)} />}
        {user && (
          <div className="userAccountContainer" ref={this.dropdownToggleProfileRef}>
            <UserProfileContainer
              user={user}
              isFetching={isFetchingProfile || walletAppManager.state.isFetching}
              userProfile={userProfile}
              wallet={walletAppManager.state.wallet}
              error={errorFetchingProfile}
              toggleMenu={this.toggleProfileMenu}
              isMenuShown={dropdownProfileOpen}
              isDisableUsername={isDisableUsername}
            />
            <UserProfileNavContainer
              onClick={() => this.setState({ dropdownProfileOpen: false })}
              onLogout={this.onLogoutClick}
              showMenu={dropdownProfileOpen}
            />
          </div>
        )}
      </div>
    )
  }
}
