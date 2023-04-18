/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { CommonError } from '@od-components/components/CommonError'
import { EcommerceErrorCode } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import React from 'react'
import { Trans } from 'react-i18next'

export const BaseStoreDetailError = ({ error }: { error: Error | unknown }) => {
  const errorMessage = () => {
    // // referenced as a read but never initialized
    // if (error instanceof ItemDecodeError) {
    //   gaSendErrorEvent({ eventCategory: 'ItemDecodeError', eventLabel: ShUtils.errorToString(error) })
    //   return <Trans i18nKey="GameDetailViewPage.item.decodeError">The game data from the server is invalid. Please refresh the page.</Trans>
    // }
    if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.PRODUCT_KEY_NOT_AVAILABLE) {
      return <Trans i18nKey="StoreDetail.item.productKeyNotAvailable">This product key is no longer available</Trans>
    }
    return <CommonError error={error} />
  }

  return <div className="error">{errorMessage()}</div>
}
