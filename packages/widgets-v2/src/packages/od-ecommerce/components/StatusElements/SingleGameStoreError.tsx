/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { DecodeError } from '@accelbyte/sdk'
import { CommonError } from '@od-components/components/ErrorPage/CommonError'
import { FeatureDecodeError } from '@od-shared/models/Cms'
import React from 'react'
import { Trans } from 'react-i18next'

export const SingleGameStoreError = ({ error }: { error: Error | unknown }) => {
  const renderErrorMessage = () => {
    switch (true) {
      case error instanceof FeatureDecodeError:
      case error instanceof DecodeError:
        return <Trans i18nKey="AppDetailPage.item.decodeError">The game data from the server is invalid. Please refresh the page.</Trans>
      default:
        return <CommonError error={error} />
    }
  }

  return <div className="error">{renderErrorMessage()}</div>
}
