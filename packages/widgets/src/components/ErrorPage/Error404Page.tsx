/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import ufo from '@od-assets/images/ufo.png'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

const Error404Page = () => {
  return (
    <div className="errorPage" style={{ backgroundImage: `url(${starBgGradient})` }}>
      <div className="errorPageContentWrapper error404">
        <div className="errorPageContent">
          <img src={ufo} alt="space ship alien" loading="lazy" />
          <div className="errorPageText">
            <h2 className="textHeading">
              <Trans i18nKey="ErrorPage404.title">Page Not Found</Trans>
            </h2>
            <h3 className="textSubHeading">
              <Trans i18nKey="ErrorPage404.subTitle">Oh no! Our webpage has been kidnapped!</Trans>
            </h3>
            <div className="textContent">
              <Trans i18nKey="ErrorPage404.textContent">
                <p>There's nothing we can do right now...</p>
                <p>Lets retreat to our homepage.</p>
              </Trans>
              <div className="buttonWrapper">
                <Link to={GlobalPath.Home.link}>
                  <Button className="btn btn-primary">
                    <Trans i18nKey="ErrorPage404.buttonAction">Back To Home</Trans>
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

export default Error404Page
