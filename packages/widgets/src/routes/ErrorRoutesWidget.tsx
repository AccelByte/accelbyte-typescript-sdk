/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ErrorPath } from '@od-shared/routes/ErrorPath'
import React from 'react'
import { Route } from 'react-router-dom'

import ErrorSessionExpiredPage from '../components/ErrorPage/ErrorSessionExpiredPage'
import Error401Page from '../components/ErrorPage/Error401Page'
import Error404Page from '../components/ErrorPage/Error404Page'
import Error500Page from '@od-components/components/ErrorPage/Error500Page'
import ErrorNetworkPage from '../components/ErrorPage/ErrorNetworkPage'

export function ErrorRoutesWidget() {
  return [
    <Route key="ErrorPage401" exact path={ErrorPath.Error401.link} render={() => <Error401Page />} />,
    <Route key="ErrorPage500" exact path={ErrorPath.Error500.link} render={() => <Error500Page />} />,
    <Route key="NetworkError" exact path={ErrorPath.ErrorNetwork.link} render={() => <ErrorNetworkPage />} />,
    <Route key="LoginSessionExpired" exact path={ErrorPath.ErrorSessionExpired.link} render={() => <ErrorSessionExpiredPage />} />,
    <Route key="ErrorPage404" path="*" render={() => <Error404Page />} />
  ]
}
