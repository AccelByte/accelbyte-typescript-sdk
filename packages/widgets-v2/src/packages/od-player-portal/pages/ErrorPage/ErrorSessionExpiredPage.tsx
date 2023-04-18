/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import astronautTime from '@od-assets/images/astronaut-time.png'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import React from 'react'
import { Trans } from 'react-i18next'
import './ErrorPage.scss'
import { useAppState } from '~/hooks/useAppState'
import { useRoutes } from '~/hooks/routes/useRoutes'

export const ErrorSessionExpiredPage = () => {
  const { state: routesState } = useRoutes()
  const appState = useAppState()

  const logoutAndBackToLogin = async () => {
    await appState.logout(routesState.home.link)
  }

  return (
    <div className="errorPage" style={{ backgroundImage: `url(${starBgGradient})` }}>
      <div className="errorPageContentWrapper errorLoginSession">
        <div className="errorPageContent">
          <img src={astronautTime} className="errorPageImage" alt="astronaut time" loading="lazy" />
          <div className="errorPageText">
            <h2 className="textHeading">
              <Trans i18nKey="LoginSessionExpired.title">Oops... Your Session Expired</Trans>
            </h2>
            <h3 className="textSubHeading">
              <Trans i18nKey="LoginSessionExpired.subTitle">Sorry we lost you! Please log in again.</Trans>
            </h3>
            <div className="textContent">
              <div className="buttonWrapper">
                <Button className="btn btn-primary" onClick={logoutAndBackToLogin}>
                  <Trans i18nKey="LoginSessionExpired.buttonAction">Back To Login</Trans>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
