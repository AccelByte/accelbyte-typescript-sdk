/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { UserHelper } from '@od-shared/utils/UserHelper'
import classNames from 'classnames'
import React from 'react'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import './ProfileImage.scss'

class ProfileImageProps {
  className?: string
  imageLink?: string
  alt?: string
}

export const ProfileImage = (props: ProfileImageProps) => {
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()
  const defaultUserImage = UserHelper.getDefaultAvatar(discoveryConfigData?.avatarsList.data.value)
  const userImageProfile = UrlUtils.isValidUrl(props.imageLink) ? props.imageLink : defaultUserImage

  return (
    <div className={classNames('profileImage', props.className)} style={{ backgroundImage: `url("${userImageProfile}")` }}>
      &nbsp;
    </div>
  )
}
