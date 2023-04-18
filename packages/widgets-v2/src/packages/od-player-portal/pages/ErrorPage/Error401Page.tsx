/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
import sadGuy from '@od-assets/images/sadGuy.svg'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

export default class Error401Page extends React.Component {
  render() {
    return (
      <div className="errorPage" style={{ backgroundImage: `url(${starBgGradient})` }}>
        <div className="errorPageContentWrapper">
          <div className="errorPageContent">
            <div className="errorPageText error401">
              <div className="errorPageIconWrapper">
                <img src={sadGuy} alt="sad guy so mellow" loading="lazy" />
              </div>

              <h3 className="textSubHeading">
                <Trans i18nKey="ErrorPage401.heading">Error 401 - Unauthorized</Trans>
              </h3>
              <div className="textContent">
                <Trans i18nKey="ErrorPage401.textContent">
                  <p>The page you are trying to access is unavailable.</p>
                </Trans>

                <div className="buttonWrapper">
                  <Link to={GlobalPath.Home.link}>
                    <Button className="btn btn-primary">
                      <Trans i18nKey="ErrorPage401.buttonAction">Back To Home</Trans>
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
}
