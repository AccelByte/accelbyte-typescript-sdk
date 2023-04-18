/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { Loading } from '@od-components/components/Loading/Loading'
import { ProfileImage } from '@od-components/components/ProfileImage/ProfileImage'
import classNames from 'classnames'
import { EligibleUser, UserResponseV3 } from '@accelbyte/sdk-iam'
import React from 'react'
import './UserProfileContainer.scss'
import { UserProfilePrivateInfo } from '@accelbyte/sdk-basic'
import { PlatformWallet } from '@accelbyte/sdk-platform'

export const UserProfileContainer = ({
  user,
  userProfile,
  isFetching,
  wallet,
  error,
  toggleMenu,
  isMenuShown,
  isDisableUsername
}: {
  user: UserResponseV3
  isFetching: boolean
  userProfile: UserProfilePrivateInfo | null
  wallet: PlatformWallet | null
  error: Error | unknown | null
  toggleMenu: () => void
  isMenuShown: boolean
  isDisableUsername?: boolean
}) => {
  const getNameFallback = () => {
    if (!EligibleUser.safeParse(user).success) return null

    if (isDisableUsername) {
      return user.displayName || user.userName
    }

    return user.userName || user.displayName
  }

  return (
    <div className={classNames('userProfileDropdown', isMenuShown && 'open')} onClick={() => toggleMenu()}>
      {!isFetching && error && <CommonError error={error} />}

      {!isFetching && !error && userProfile ? (
        <React.Fragment>
          <ProfileImage imageLink={(userProfile && userProfile.avatarUrl) || ''} className="userProfileImage" />
          <div className="userProfileContainer">
            <p className="userProfileDisplayName">{getNameFallback()}</p>
            {wallet && (
              <p className="userProfileWallet">
                {wallet.currencySymbol} {wallet.balance}
              </p>
            )}
          </div>
          <ArrowIcon className={classNames(ArrowIconStyles.down, 'arrowSize')} />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  )
}
