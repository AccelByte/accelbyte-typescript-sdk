/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import refreshTime from '@od-assets/images/refresh_time.svg'
import React from 'react'
import { t } from '../../i18n/i18n'
import { ErrorLayout } from './ErrorLayout'

interface Props {
  error: Error
  message?: string
  buttonAction?: () => void
}

export const LoginSessionExpired = ({ message, buttonAction }: Props) => {
  return (
    <ErrorLayout
      icon={refreshTime}
      title={t('ErrorPage.loginSessionExpired.message')}
      description={t('ErrorPage.loginSessionExpired.description')}
      message={message}
      buttonAction={buttonAction}
      buttonText={t('ErrorPage.loginSessionExpired.button')}
    />
  )
}
