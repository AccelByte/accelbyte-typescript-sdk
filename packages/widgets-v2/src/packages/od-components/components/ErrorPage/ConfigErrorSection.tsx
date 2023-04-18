/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppName } from '@od-shared/constants/ShConstants'
// import { Env } from '@od-shared/Env'
import { ConfigError } from '@od-shared/models/ConfigError'
// import { LauncherHelper } from '@od-shared/utils/LauncherHelper'
import React from 'react'
import { Trans } from 'react-i18next'
import { t } from '../../i18n/i18n'
import './ConfigErrorSection.scss'
import { ErrorLayout } from './ErrorLayout'

interface Props {
  error: ConfigError
}

export class ConfigErrorSection extends React.Component<Props> {
  openWebsite = (e: any) => {
    e.preventDefault()

    // LauncherHelper.openExternalBrowser(Env.BASE_URL)
  }

  render() {
    const { error } = this.props
    const errorCode = `ERR${error.code}`

    return (
      <ErrorLayout
        title={<Trans i18nKey="ErrorPage.configError.message">{{ errorCode }}: Sorry, something wrong on our configuration</Trans>}
        description={
          <div className="configError-description">
            <p>{t('ErrorPage.serverError.description')}</p>
            {error.appName === AppName.LAUNCHER && (
              <p>
                <Trans i18nKey="ErrorPage.configError.launcher.description">
                  If you are using an older launcher version, please consider to download the latest one
                  <a onClick={this.openWebsite}>here</a>
                </Trans>
              </p>
            )}
          </div>
        }
      />
    )
  }
}
