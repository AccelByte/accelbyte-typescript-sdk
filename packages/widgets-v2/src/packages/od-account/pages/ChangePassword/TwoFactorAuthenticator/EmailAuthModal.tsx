/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { FormGroup } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { InputLabel } from '@od-components/components/Form/InputLabel/InputLabel'
import { t } from '@od-components/i18n/index'
import { AlertValue } from '@od-shared/models/Alert'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { useUserInfo } from '~/hooks/iam/useUserInfo'

interface Props {
  isOpen: boolean
  onClose: () => void
  onResendCode: () => void
  alert: AlertValue | null
  closeAlert: () => void
  enableEmail: (code: string, callbackError: () => void) => void
  isLoading: boolean
}

export const EmailAuthModal = ({ isOpen, alert, isLoading, onClose, onResendCode, closeAlert, enableEmail }: Props) => {
  const [code, setCode] = useState('')
  const { state: userState } = useUserInfo()

  const submitCode = () => {
    enableEmail(code, () => setCode(''))
  }

  const onCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const code = event.target.value
    setCode(code)
  }

  const onCloseModal = () => {
    setCode('')
    onClose()
    closeAlert()
  }

  const email = userState.user?.emailAddress
  return (
    <Dialog isOpen={isOpen} title={t('AccountPasswordSecurity.2fa.emailModal.title')} className="w-[450px]" onClose={onCloseModal}>
      <DialogBody>
        <div className="mb-3 text-sm">
          <Trans i18nKey="AccountPasswordSecurity.2fa.emailModal.desc">
            To continue, please enter the verification code we’ve sent to your email at <strong>{{ email }}</strong>.
          </Trans>
        </div>
        {alert && (
          <Alert type={alert.type} onDismiss={closeAlert} className="mb-3">
            {alert.element}
          </Alert>
        )}
        <FormGroup>
          <InputLabel>{t('AccountPasswordSecurity.2fa.emailModal.inputLabel')}</InputLabel>
          <InputGroup placeholder={t('AccountPasswordSecurity.2fa.emailModal.placeHolder')} value={code} onChange={onCodeChange} />
          <div className="mt-2 text-[13px]">
            <span>{t('AccountPasswordSecurity.2fa.emailModal.helperText')}</span>
            <span className="ml-1 cursor-pointer text-blue-50" onClick={onResendCode}>
              {t('AccountPasswordSecurity.2fa.emailModal.resendBtn')}
            </span>
          </div>
        </FormGroup>
      </DialogBody>
      <DialogFooter>
        <div className="justify-end sm:flex">
          <Button
            className="btn btn-ghost mr-5 w-full w-[87px] text-sm"
            buttonType={ButtonType.TEXT}
            buttonStyle={ButtonStyle.NONE}
            onClick={onCloseModal}>
            {t('AccountPasswordSecurity.2fa.cancelBtn')}
          </Button>
          <Button className="btn btn-primary mt-3 w-full w-[102px] text-sm sm:mt-0" onClick={submitCode} disabled={isLoading || !code}>
            {t('AccountPasswordSecurity.2fa.btnEnable').toUpperCase()}
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  )
}
