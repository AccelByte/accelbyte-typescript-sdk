/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LoginButtonContainer } from '@od-components/components/Header/LoginButtonContainer'
import { UserProfileContainer } from '@od-components/components/Header/UserProfileContainer'
import { UserProfileNavContainer, UserProfileNavProps } from '@od-components/components/Header/UserProfileNavContainer'
import React, { useEffect, useRef, useState } from 'react'
import './LoginWidget.scss'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useAppState } from '~/hooks/useAppState'
import { useHistory } from '~/hooks/routes/useHistory'
import { UserResponseV3 } from '@accelbyte/sdk-iam'

export interface LoginWidgetProps {
  userDropdownMenus: UserProfileNavProps['userDropdownMenus']
  onLogout?: () => void
  // When the `user` is null, it means that the user isn't logged in .
  onUpdateUser?: (user: UserResponseV3 | null) => void
  isDisableUsername?: boolean
  returnPath?: string
}

export function LoginWidget({ onLogout, returnPath, isDisableUsername, userDropdownMenus }: LoginWidgetProps) {
  const [dropdownProfileOpen, setDropdownProfileOpen] = useState<boolean>(false)
  const {
    state: { location }
  } = useHistory()
  const currentLocation = location.pathname
  const dropdownToggleProfileRef = useRef<HTMLDivElement>(null)
  const {
    state: { user, userProfile, fetchUserProfileStatus, fetchUserStatus }
  } = useUserInfo()
  const appState = useAppState()
  const isLoading = fetchUserProfileStatus === FetchStatus.FETCHING || fetchUserStatus === FetchStatus.FETCHING

  useEffect(() => {
    window.addEventListener('click', toggleMenuOff)

    return () => {
      window.removeEventListener('click', toggleMenuOff)
    }
  }, [])

  const toggleMenuOff = (event: MouseEvent) => {
    if (dropdownProfileOpen && !event.composedPath().includes(dropdownToggleProfileRef.current as EventTarget)) {
      setDropdownProfileOpen(false)
    }
  }

  const onLogoutClick = async () => {
    await appState.logout()
    if (onLogout) {
      onLogout()
    }
  }

  const toggleProfileMenu = () => {
    setDropdownProfileOpen(!dropdownProfileOpen)
  }

  return (
    <>
      {!user && <LoginButtonContainer currentLocation={currentLocation} returnPath={returnPath} />}
      {user && (
        <div className="userAccountContainer" ref={dropdownToggleProfileRef}>
          <UserProfileContainer
            user={user}
            userProfile={userProfile}
            wallet={null}
            error={null}
            isFetching={isLoading}
            toggleMenu={toggleProfileMenu}
            isMenuShown={dropdownProfileOpen}
            isDisableUsername={isDisableUsername}
          />
          <UserProfileNavContainer
            onClick={() => setDropdownProfileOpen(false)}
            onLogout={onLogoutClick}
            showMenu={dropdownProfileOpen}
            userDropdownMenus={userDropdownMenus}
          />
        </div>
      )}
    </>
  )
}
