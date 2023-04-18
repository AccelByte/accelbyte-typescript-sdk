/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { InfoIcon } from '@od-components/components/Icons/InfoIcon'
import avatarRPM1 from '@od-assets/images/avatar-rpm-1.png'
import avatarRPM2 from '@od-assets/images/avatar-rpm-2.png'
import byReadyPlayerMe from '@od-assets/images/by-ReadyPlayerMe.svg'
import React from 'react'
import { Trans } from 'react-i18next'
import './RPMCreateButton.scss'

interface Props {
  showCreatorRPM: () => void
}

export const RPMCreateButton = (props: Props) => {
  const { showCreatorRPM } = props
  return (
    <>
      <div className="textSeparator">
        <Trans i18nKey="SelectAvatarDialog.or">or</Trans>
      </div>
      <div className="title">
        <Trans i18nKey="SelectAvatarDialog.RPM.title">Custom 3D Avatar</Trans>
      </div>
      <div className="containerReadyPlayerMe">
        <div className="leftContainer">
          <div className="imageAvatarContainer">
            <img src={avatarRPM2} loading="lazy" />
            <img src={avatarRPM1} className="absoluteImage" loading="lazy" />
          </div>
        </div>
        <div className="rightContainer">
          <div className="titleRightContainer">
            <Trans i18nKey="SelectAvatarDialog.RPM.createInfo">Create your 3D Avatar</Trans>
          </div>
          <img src={byReadyPlayerMe} loading="lazy" />
          <Button className="btn btn-primary btnCreateAvatar" onClick={showCreatorRPM}>
            <Trans i18nKey="SelectAvatarDialog.RPM.openDialogButton">Customize 3D Avatar</Trans>
          </Button>
        </div>
      </div>
      <div className="noteContainer">
        <InfoIcon fillColor="none" stroke="#B5B5B5" />
        <div className="noteMessage">
          <Trans i18nKey="RPMCreator.note">
            ReadyPlayerMe uses local storage to save the avatar data, so the avatar that you saved on ReadyPlayerMe app will be shared
            across different accounts under same web browser on your computer.
          </Trans>
        </div>
      </div>
    </>
  )
}
