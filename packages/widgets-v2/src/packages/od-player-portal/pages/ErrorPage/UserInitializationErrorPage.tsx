/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import './UserInitializationErrorPage.scss'

const UserInitializationErrorPage = () => {
  return (
    <div className="userInitializationErrorPage">
      <Trans i18nKey="UserInitializationErrorPage.unexpectedError">
        Something went wrong. We're working on getting this fixed as soon as we can.{' '}
      </Trans>
    </div>
  )
}

export default UserInitializationErrorPage
