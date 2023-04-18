/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { validateAlphanumeric, ValidateAlphaNumericErrorType, Validation } from '@accelbyte/validator'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Form, FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { Loading } from '@od-components/components/Loading/Loading'
import { t, getCurrentLanguage } from '@od-components/i18n/index'
import { mockDlcItemId } from '@od-shared/mocks/MockVars'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import React, { useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import { RedeemCodeHooks } from './RedeemCodeHooks'
import './RedeemCode.scss'

interface State {
  code: string
  alert: AlertValue | null
}

interface Props {
  isPreviewMode?: boolean
}

const MAX_REDEEM_CODE_LENGTH = 20
enum ERROR_REDEEM_CODE {
  INVALID_CODE = 37142,
  CODE_NO_LONGER_AVAILABLE = 37071,
  INACTIVE_CAMPAIGN = 37172,
  MAX_REDEEM_CODE = 37174,
  CODE_ALREADY_CLAIMED = 37179
}

export function RedeemCode({ isPreviewMode }: Props) {
  const [state, setState] = useState<State>({ alert: null, code: '' })

  const {
    state: { redeemCodeFetchStatus },
    mutations: { redeemCode }
  } = RedeemCodeHooks.useRedeemCode()
  const {
    state: { user }
  } = useUserInfo()

  const validation = useRef(
    new Validation<{
      code: ValidateAlphaNumericErrorType
    }>()
  )

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const onRedeemCodeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const code = event.target.value
    validation.current.set('code', validateAlphanumeric(code, { maxLength: MAX_REDEEM_CODE_LENGTH }))
    updateState({ code })
  }

  const submitCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const { code } = state
    const result = await redeemCode({ code, language: getCurrentLanguage(), user })

    if (result.data) {
      setState({
        code: '',
        alert: {
          type: AlertType.success,
          element: <Trans i18nKey="RedeemCodePage.successfully">Your code has been redeemed</Trans>
        }
      })
    } else {
      updateState({
        alert: {
          type: AlertType.danger,
          element: <RedeemCodeFetchError error={result.error} />
        }
      })
    }
  }

  const { alert, code } = state

  const isRedeemingCode = redeemCodeFetchStatus === FetchStatus.REDEEMING
  const isSubmitBtnDisabled = !validation.current.isAllValid() || !code || isRedeemingCode

  return (
    <AccountMainSection>
      <AccountMainSectionHeader>
        <Trans i18nKey="RedeemCodePage.title">Redeem Code</Trans>
      </AccountMainSectionHeader>
      <AccountMainSectionBody className="redeemCodePage mainBody">
        {!!alert && !isRedeemingCode && (
          <Alert type={alert.type} className="alert" onDismiss={() => updateState({ alert: null })}>
            {alert.element}
          </Alert>
        )}

        {isRedeemingCode && (
          <Loading>
            <Trans i18nKey="RedeemCodePage.loading.message">Processing your code...</Trans>
          </Loading>
        )}

        {!isRedeemingCode && (
          <div className="redeemCodePage">
            <p className="guide">
              <Trans i18nKey={'RedeemCodePage.guide'}>
                Type your product code below to redeem your game, in-game item, bundle, or coins.
              </Trans>
            </p>

            <Form onSubmit={submitCode} className="form" orientation="horizontal">
              <FormGroup>
                <InputGroup
                  className="inputRedeem"
                  disabled={isRedeemingCode}
                  type="text"
                  value={!isPreviewMode ? code : mockDlcItemId}
                  placeholder={t('RedeemCodePage.form.placeholder')}
                  onChange={onRedeemCodeChange}
                  readOnly={isPreviewMode}
                />
                <RedeemCodeValidationError errorType={validation.current.get('code')} />
              </FormGroup>
              <Button disabled={isSubmitBtnDisabled} className="btn btn-primary buttonRedeem" type="submit">
                <Trans i18nKey={'RedeemCodePage.buttonAction'}>Redeem</Trans>
              </Button>
            </Form>
          </div>
        )}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}

// Composing components.
function RedeemCodeFetchError({ error }: { error: FetchErrorType | unknown }) {
  const errorCode = ErrorHelper.extractServiceErrorCode(error)

  switch (errorCode) {
    case ERROR_REDEEM_CODE.INVALID_CODE:
      return <Trans i18nKey="RedeemCodePage.error.invalidCode">Invalid code. Please check the code and try again.</Trans>
    case ERROR_REDEEM_CODE.CODE_NO_LONGER_AVAILABLE:
      return <Trans i18nKey="RedeemCodePage.error.noLongerAvailable">This code is no longer available.</Trans>
    case ERROR_REDEEM_CODE.INACTIVE_CAMPAIGN:
      return <Trans i18nKey="RedeemCodePage.error.inactiveCampaign">Campaign is inactive check again late</Trans>
    case ERROR_REDEEM_CODE.MAX_REDEEM_CODE:
      return (
        <Trans i18nKey="RedeemCodePage.error.maxRedeemCount">
          This code has already been redeemed the maximum number of times allowed per user. Please try a different code.
        </Trans>
      )
    case ERROR_REDEEM_CODE.CODE_ALREADY_CLAIMED:
      return (
        <Trans i18nKey="RedeemCodePage.error.codeAlreadyClaimed">This code has already been redeemed. Please enter a different code.</Trans>
      )
    default:
      return <CommonError error={error} />
  }
}

function RedeemCodeValidationError({ errorType }: { errorType: ValidateAlphaNumericErrorType | null }) {
  if (!errorType) return null

  const redeemCodeErrorMap = {
    [ValidateAlphaNumericErrorType.enum.empty]: (
      <Trans i18nKey="RedeemCodePage.redeemCodeForm.redeemCodeFormError.empty">You must enter the product code</Trans>
    ),
    [ValidateAlphaNumericErrorType.enum.exceedLengthLimit]: (
      <Trans i18nKey="RedeemCodePage.redeemCodeForm.redeemCodeFormError.ExceedLimit">
        The product code must not exceed {{ MAX_REDEEM_CODE_LENGTH }} characters
      </Trans>
    ),
    [ValidateAlphaNumericErrorType.enum.invalidFormat]: (
      <Trans i18nKey="RedeemCodePage.redeemCodeForm.redeemCodeFormError.invalidFormat">
        The product code must be alphanumerica and cannot contain spaces or special characters.
      </Trans>
    )
  }

  return <FormGroupError>{redeemCodeErrorMap[errorType]}</FormGroupError>
}
