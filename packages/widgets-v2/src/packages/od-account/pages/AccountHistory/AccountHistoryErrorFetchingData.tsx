/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import React from 'react'
import { Trans } from 'react-i18next'

export const AccountHistoryErrorFetchingData = () => (
  <div className="editHistoryPage__error">
    <p>
      <Trans i18nKey="AccountHistoryPage.fetchingError.error">An error has occured while fetching the data</Trans>
    </p>
    <p>
      <Trans i18nKey="AccountHistoryPage.fetchingError.reload">Please try to reload</Trans>
    </p>
    <Button className="btn" onClick={() => window.location.reload()}>
      <Trans i18nKey="AccountHistoryPage.fetchingError.button.reload">Reload</Trans>
    </Button>
  </div>
)
