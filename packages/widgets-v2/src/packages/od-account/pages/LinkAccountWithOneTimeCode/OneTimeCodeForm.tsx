/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'
import { t } from '@od-components/i18n/index'
import OtpInput from 'react-otp-input'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import styles from './LinkAccountWithOneTimeCodePage.module.scss'
import { ONE_TIME_CODE_LENGTH } from './constants'
import { useSdk } from '~/hooks/useSdk'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { Iam } from '@accelbyte/sdk-iam'

// TODO: Fix default import error on remix
const ReactOtpInput: typeof OtpInput = typeof OtpInput === 'object' ? (OtpInput as any).default : OtpInput

interface Props {
  onContinue: (code: string) => void
}

interface State {
  code: string
  isSubmitting: boolean
  alert: AlertValue | null
}

export const OneTimeCodeForm = (props: Props) => {
  const [state, setState] = React.useState<State>({
    code: '',
    isSubmitting: false,
    alert: null
  })

  const [sdk] = useSdk()
  const { state: discoveryState } = useDiscoveryConfigs()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const onCodeChange = (value: string) => {
    updateState({ code: value })
  }

  const dismissAlert = () => {
    updateState({ alert: null })
  }

  const getDisplayedAlert = (isInvalid: boolean, isExpired: boolean) => {
    if (isExpired)
      return (
        <Trans i18nKey="LinkAccountWithOneTimeCodePage.oneTimeCodeForm.error.expired">
          Sorry, the code you entered has expired. Please try again.
        </Trans>
      )
    if (isInvalid)
      return (
        <Trans i18nKey="LinkAccountWithOneTimeCodePage.oneTimeCodeForm.error.invalid">
          Sorry, the code you entered is invalid. Please try again.
        </Trans>
      )

    return null
  }

  const onSubmit = async () => {
    const { isSubmitting, code } = state

    try {
      if (isSubmitting) return
      updateState({ isSubmitting: true })
      const result = await Iam.OAuth20ExtensionApi(sdk).postLinkCodeValidate({ oneTimeLinkCode: code })

      const { valid, expired: isExpired } = result
      const isInvalid = !valid
      if (isInvalid || isExpired) {
        updateState({
          isSubmitting: false,
          alert: {
            type: AlertType.danger,
            element: getDisplayedAlert(isInvalid, isExpired)
          }
        })
        return
      }

      props.onContinue(state.code)
    } catch (error) {
      console.error(error)
      updateState({
        isSubmitting: false,
        alert: {
          type: AlertType.danger,
          element: <CommonError error={error} />
        }
      })
    }
  }

  const { code, isSubmitting, alert } = state
  const publisherName = discoveryState.discoveryConfigData?.brandName.data.value || ''
  return (
    <>
      <div className="text-center">
        <p className={styles.title}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.title">Link to an {{ publisherName }} Account</Trans>
        </p>
        <p className={styles.description}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.oneTimeCodeForm.desc">Enter the code on your device to continue.</Trans>
        </p>

        {!!alert && (
          <Alert type={alert.type} onDismiss={dismissAlert} className="mt-5 text-left">
            {alert.element}
          </Alert>
        )}
      </div>

      <ReactOtpInput
        value={code}
        onChange={onCodeChange}
        numInputs={ONE_TIME_CODE_LENGTH}
        className="otpInput"
        containerStyle="otpInputContainer my-5"
        focusStyle="otpInput__focus"
        shouldAutoFocus
        isDisabled={isSubmitting}
      />

      <Button
        loadingIndicator="SPINNER"
        className="btn btn-primary w-full py-2 px-0"
        onClick={onSubmit}
        disabled={code.length < ONE_TIME_CODE_LENGTH}
        isLoading={isSubmitting}>
        {t('common.continue')}
      </Button>
    </>
  )
}
