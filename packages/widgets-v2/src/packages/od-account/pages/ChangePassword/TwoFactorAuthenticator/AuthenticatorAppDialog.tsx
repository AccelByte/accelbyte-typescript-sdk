/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Dialog, DialogBody } from '@od-components/components/Dialog/Dialog'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { Loading } from '@od-components/components/Loading/Loading'
import { t } from '@od-components/i18n/i18n'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import classnames from 'classnames'
import { validateAlphanumeric, ValidateAlphaNumericErrorType, Validation } from '@accelbyte/validator'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import './AuthenticatorAppDialog.scss'
import { QRCodeImage } from './components/QRCodeImage'
import { Check, Copy } from 'react-feather'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useSdk } from '~/hooks/useSdk'
import { FetchStatus } from '~/constants/fetch-statuses'
import { Iam } from '@accelbyte/sdk-iam'

const AuthenticatorAppDialogError = ({
  errorType,
  errorInput
}: {
  errorType: ValidateAlphaNumericErrorType | null
  errorInput: Error | unknown
}) => {
  switch (errorType) {
    case ValidateAlphaNumericErrorType.enum.empty:
      return (
        <FormGroupError>
          <Trans i18nKey="AccountPasswordSecurity.2fa.twoFaCode.error.empty">Code is required</Trans>
        </FormGroupError>
      )
  }

  return (
    <FormGroupError>
      <CommonError error={errorInput} />
    </FormGroupError>
  )
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  onUpdated: () => void
}

interface State {
  TwoFACode: string
  errorInput: Error | unknown | null
  alert: AlertValue | null
  isCopied: boolean
}

const CodeNotMatchErrorCode = 10138

export const AuthenticatorAppDialog = ({ isOpen, onClose, onSuccess, onUpdated }: Props) => {
  const validation = React.useRef<
    Validation<{
      verificationCode: ValidateAlphaNumericErrorType
    }>
  >(new Validation())
  const [state, setState] = useState<State>({
    TwoFACode: '',
    errorInput: null,
    alert: null,
    isCopied: false
  })
  const { TwoFACode, errorInput, alert, isCopied } = state
  const {
    state: { authenticatorKeyFetchStatus, authenticatorKey },
    mutations: userMutations
  } = useUserInfo()
  const [sdk] = useSdk()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (isOpen) {
      userMutations.generateAuthenticatorSecretKey()
    }
  }, [isOpen])

  const enableAuthenticator = async () => {
    updateState({ errorInput: null, alert: null })
    try {
      await Iam.UsersV4Api(sdk).postUserMeMfaAuthenticatorEnable({ code: TwoFACode })
      onClose()
      onSuccess()
      onUpdated()
    } catch (error) {
      console.error(error)
      const errorCode = ErrorHelper.extractServiceErrorCode(error)
      if (errorCode === CodeNotMatchErrorCode) {
        updateState({ errorInput: error })
      } else {
        updateState({
          alert: {
            type: AlertType.danger,
            element: <CommonError error={error} />
          }
        })
      }
    }
  }

  const onChangeTwoFACode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const twoFaCodeInput = event.target.value
    updateState({ TwoFACode: twoFaCodeInput })
    validation.current.set('verificationCode', validateAlphanumeric(twoFaCodeInput))
  }

  const onCopyCode = (value: string) => {
    navigator.clipboard.writeText(value)
    updateState({ isCopied: true })
    setTimeout(() => {
      updateState({ isCopied: false })
    }, 1000)
  }

  return (
    <Dialog title={t('AccountPasswordSecurity.2fa.authenticator.title')} isOpen={isOpen} className="authenticatorApp" onClose={onClose}>
      <DialogBody>
        <div className="mb-4 text-[color:rgb(var(--od-rgb-text),0.65)]">
          <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.subtitle">
            Please follow the instruction below to setup two-factor authentication
          </Trans>
        </div>
        {alert && (
          <Alert type={alert.type} onDismiss={() => updateState({ alert: null })} className="mb-3">
            {alert.element}
          </Alert>
        )}
        <div className="bg-grayD1 p-8">
          <div className="flex text-[color:rgb(var(--od-rgba-text))]">
            <div className="mr-3 flex h-6 w-6 justify-center rounded-full bg-blue-50">1</div>
            <div>
              <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step1.title">Download an authenticator app</Trans>
            </div>
          </div>
          <div className="descStep border-l-2 border-blue-50">
            <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step1.desc">
              Download and install an authenticator app for your phone or tablet.
            </Trans>
          </div>
          <div className="flex text-[color:rgb(var(--od-rgba-text))]">
            <div className="mr-3 flex h-6 w-6 justify-center rounded-full bg-blue-50">2</div>
            <div>
              <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step2.title">Scan the QR code</Trans>
            </div>
          </div>
          <div className="descStep border-l-2 border-blue-50">
            <div>
              <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step2.desc">
                Open the authenticator app and follow the instruction to scan this QR Code
              </Trans>
            </div>
            <div className="mt-3 items-center md:flex">
              {authenticatorKeyFetchStatus === FetchStatus.CREATING || !authenticatorKey ? (
                <Loading />
              ) : (
                <>
                  <QRCodeImage qrValue={authenticatorKey.uri} onRetry={userMutations.generateAuthenticatorSecretKey} />
                  {authenticatorKey.secretKey && (
                    <div className="decsQRcode sm:py-3 md:p-3">
                      <div>
                        <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step2.desc2">
                          Can't scan the QR code? Enter this text code manually.
                        </Trans>
                      </div>
                      <div className="bg-gray-80 rounded p-3 pr-1.5">
                        <div className="flex justify-between">
                          <input className="bg-gray-80 w-full cursor-text break-all" disabled value={authenticatorKey.secretKey} />
                          <button onClick={() => onCopyCode(authenticatorKey.secretKey)}>
                            {!isCopied ? <Copy className="m-1.5" /> : <Check className="m-1.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex text-[color:rgb(var(--od-rgba-text))]">
            <div className="mr-3 flex h-6 w-6 justify-center rounded-full bg-blue-50">3</div>
            <div>
              <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step3.title">Enter the authentication code</Trans>
            </div>
          </div>
          <div className="descStep">
            <div className="mb-3">
              <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.step3.desc">
                Once you have scanned the barcode, enter the 6-digit authentication code generated by the authenticator app.
              </Trans>
            </div>
            <FormGroup>
              <InputGroup
                className={classnames('mb-3 w-3/5', {
                  'border-red-40': errorInput || validation.current.get('verificationCode')
                })}
                placeholder={t('AccountPasswordSecurity.2fa.authenticator.placeholder')}
                value={TwoFACode}
                onChange={onChangeTwoFACode}
              />
              {(errorInput || validation.current.get('verificationCode')) && (
                <AuthenticatorAppDialogError errorInput={errorInput} errorType={validation.current.get('verificationCode')} />
              )}
            </FormGroup>
            <div>
              <Button className="btn btn-primary" onClick={enableAuthenticator} disabled={!TwoFACode}>
                <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.activate">ACTIVATE</Trans>
              </Button>
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  )
}
