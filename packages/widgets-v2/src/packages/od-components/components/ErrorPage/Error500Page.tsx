/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import brokenRocket from '@od-assets/images/brokenRocket.svg'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import React from 'react'
import { Trans } from 'react-i18next'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import './CommonError.scss'

export const Error500Page = () => {
  const { state: routesState } = useRoutes()

  return (
    <div className="errorPage" style={{ backgroundImage: `url(${starBgGradient})` }}>
      <div className="errorPageContentWrapper error500">
        <div className="errorPageContent">
          <img src={brokenRocket} alt="space ship alien" loading="lazy" />
          <div className="errorPageText">
            <h2 className="textHeading">
              <Trans i18nKey="ErrorPage500.title">Internal Server Error</Trans>
            </h2>
            <div className="textContent">
              <Trans i18nKey="ErrorPage500.textContent">
                <p>Don't worry, our team on Mars is working hard to fix this!</p>
                <p>For now let's retreat to our home page.</p>
              </Trans>

              <div className="buttonWrapper">
                <Link to={routesState.home.link}>
                  <Button className="btn btn-primary">
                    <Trans i18nKey="ErrorPage500.buttonAction">Back To Home</Trans>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
