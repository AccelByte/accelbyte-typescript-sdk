/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { LoginIcon } from '@od-components/components/Icons/LoginIcon'
import React from 'react'
import { Trans } from 'react-i18next'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useSdk } from '~/hooks/useSdk'
import { Button, ButtonStyle, ButtonType } from '../Button/Button'
import './LoginButtonContainer.scss'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

export const LoginButtonContainer = ({ currentLocation, returnPath }: { currentLocation: string; returnPath?: string }) => {
  const { state } = useRoutes()
  const [sdk] = useSdk()
  const isInErrorPage = currentLocation.includes(state.error.index.link)
  const returnPathLocation = (!isInErrorPage && currentLocation) || null

  const tryLogin = () => {
    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL(returnPath || returnPathLocation)
    window.location.replace(loginURL)
  }

  return (
    <div className="loginButtonContainer">
      <Button className="loginButton" buttonType={ButtonType.TEXT} buttonStyle={ButtonStyle.WHITE} onClick={tryLogin}>
        <LoginIcon />
        <Trans i18nKey="Navigation.links.login">Login</Trans>
      </Button>
    </div>
  )
}
