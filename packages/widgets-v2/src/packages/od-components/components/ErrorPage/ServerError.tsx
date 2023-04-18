/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import setting from '@od-assets/images/setting.svg'
import React from 'react'
import { t } from '../../i18n/i18n'
import { ErrorLayout } from './ErrorLayout'

interface Props {
  error: Error
  message?: string
  buttonAction?: () => void
}

export const ServerError = ({ message, buttonAction }: Props) => {
  return (
    <ErrorLayout
      icon={setting}
      title={t('ErrorPage.serverError.message')}
      description={t('ErrorPage.serverError.description')}
      message={message}
      buttonAction={buttonAction}
      buttonText={t('ErrorPage.serverError.button')}
    />
  )
}
