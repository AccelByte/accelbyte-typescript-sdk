/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { ProfileImage } from '@od-components/components/ProfileImage/ProfileImage'
import { Typography } from '@od-components/components/Typography/Typography'
import classnames from 'classnames'
import './UserInfoCard.scss'

interface Props {
  withAvatar?: boolean
  avatarURL?: string
  displayName: string
  email?: string
  className?: string
  bottomCta?: React.ReactNode
}

export const UserInfoCard: React.FC<Props> = ({ withAvatar, avatarURL, displayName, email, className, bottomCta }) => {
  if (!withAvatar) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className={classnames(className, 'userInfoCardDisplayNameOnly')}>
          <Typography tag="p" isCentered className="displayName">
            {displayName}
          </Typography>
        </div>
        {bottomCta && <div className="bottomCta">{bottomCta}</div>}
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col gap-2 text-left">
      <div className={classnames(className, 'userInfoCard')}>
        <div className="avatarContainer">
          <ProfileImage imageLink={avatarURL} className="avatarImage" />
        </div>
        <div className="userInfoContainer">
          <Typography tag="p" className="displayName">
            {displayName}
          </Typography>
          {email && (
            <Typography tag="p" className="email">
              {email}
            </Typography>
          )}
        </div>
      </div>
      {bottomCta && <div className="bottomCta">{bottomCta}</div>}
    </div>
  )
}
