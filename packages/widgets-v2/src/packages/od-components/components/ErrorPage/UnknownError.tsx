/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import gameConsoleError from '@od-assets/images/game_console_error.svg'
import { TsxUtils } from '@od-shared/utils/TsxUtils'
import React from 'react'
import { t } from '../../i18n/i18n'
import { ErrorLayout } from './ErrorLayout'

interface Props {
  error?: Error
  message?: string
  buttonAction?: () => void
}

export const UnknownError = ({ message, buttonAction }: Props) => {
  return (
    <ErrorLayout
      icon={gameConsoleError}
      title={t('ErrorPage.clientError.message')}
      description={TsxUtils.addLineBreaks(t('ErrorPage.clientError.description'))}
      message={message}
      buttonAction={buttonAction}
      buttonText={t('ErrorPage.clientError.button')}
    />
  )
}
