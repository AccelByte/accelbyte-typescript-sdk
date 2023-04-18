/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Ctx } from '@od-shared/Ctx'
import { Env } from '@od-shared/Env'
import { LoginPath } from '@od-shared/routes/LoginPath'
import brokenRocket from '@od-assets/images/brokenRocket.svg'
import starBgGradient from '@od-assets/images/starBgGradient.svg'
import * as React from 'react'
import { Trans } from 'react-i18next'
import './ErrorPage.scss'

export default class ErrorFetchUserPage extends React.Component {
  logout = () => {
    Ctx.getAppState().state.appHistory.push(LoginPath.Logout.link)
  }

  reloadPage = () => window.location.reload()

  render() {
    const contactSupportEmail = Env.CONTACT_SUPPORT_EMAIL
    return (
      <div className="mainPageContainer">
        <div className="errorPage" style={{ backgroundImage: `url(${starBgGradient})` }}>
          <div className="errorPageContentWrapper errorFetchUser">
            <div className="errorPageContent">
              <img src={brokenRocket} alt="space ship alien" loading="lazy" />
              <div className="errorPageText">
                <h2 className="textHeading">
                  <Trans i18nKey="FetchUserErrorPage.title">Internal Server Error</Trans>
                </h2>
                <div className="textContent">
                  {!!contactSupportEmail && (
                    <Trans i18nKey="FetchUserErrorPage.textContentWithSupport">
                      <p>
                        Oops.. Something went wrong. Try to refresh this page or log in again. If the problem persists, please contact our
                        support at <a href={`mailto:${contactSupportEmail}`}>{{ contactSupportEmail }}</a>
                      </p>
                    </Trans>
                  )}
                  {!contactSupportEmail && (
                    <Trans i18nKey="FetchUserErrorPage.textContent">
                      <p>Don't worry, our team on Mars is working hard to fix this! For now let's retreat to our home page.</p>
                    </Trans>
                  )}

                  <div className="buttonWrapper">
                    <Button className="btn btn-primary" onClick={this.reloadPage}>
                      <Trans i18nKey="FetchUserErrorPage.refresh">Refresh</Trans>
                    </Button>
                    <Button className="btn" onClick={this.logout}>
                      <Trans i18nKey="FetchUserErrorPage.logout">Log out</Trans>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
