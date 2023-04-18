/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Ctx } from '@od-shared/Ctx'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
import { LoginPath } from '@od-shared/routes/LoginPath'
import astronautTime from '@od-assets/images/astronaut-time.png'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import React from 'react'
import { Trans } from 'react-i18next'
import './ErrorPage.scss'

export default class ErrorSessionExpiredPage extends React.Component {
  logoutAndBackToLogin = async () => {
    const history = Ctx.getAppState().state.appHistory

    await Ctx.getAppState().logout()
    history.push(
      LoginPath.Login.withSearchParams({
        [LoginPath.LoginURLGeneratorParamKeys.RETURN_PATH_PARAMS_KEY]: GlobalPath.Home.link
      })
    )
  }

  render() {
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
                  <Button className="btn btn-primary" onClick={this.logoutAndBackToLogin}>
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
}
