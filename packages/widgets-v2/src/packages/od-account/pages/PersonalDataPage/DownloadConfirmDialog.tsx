/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { t } from '@od-components/i18n/index'
import { validateComplexPassword, ValidateComplexPasswordErrorType, Validation } from '@accelbyte/validator'
import React from 'react'
import { Trans } from 'react-i18next'
import './CancelConfirmDialog.scss'

interface State {
  password: string
}

interface Props {
  onCancel?: () => unknown
  onConfirm?: (dateRequest: string | null, password: string | null) => unknown
  dateRequest: string | null
}

export class DownloadConfirmDialog extends React.Component<Props, State> {
  private validation: Validation<{
    password: ValidateComplexPasswordErrorType
  }>

  constructor(props: Props) {
    super(props)

    this.state = {
      password: ''
    }
    this.validation = new Validation()
    this.validation.listen(() => this.setState({}))
  }

  onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const password = event.target.value
    this.validation.set('password', validateComplexPassword(password))
    this.setState({ password })
  }

  renderErrorType(errorType: ValidateComplexPasswordErrorType | null) {
    if (errorType === ValidateComplexPasswordErrorType.enum.empty) {
      return (
        <FormGroupError>
          <Trans i18nKey="PersonalDataPage.inputPasswordForm.inputPasswordError.empty">Input your password to proceed</Trans>
        </FormGroupError>
      )
    }
    return null
  }

  render() {
    const { password } = this.state
    const { onCancel, onConfirm, dateRequest } = this.props
    return (
      <Dialog className="cancelConfirmDialog" title={t('PersonalDataPage.downloadConfirmDialog.title')} isOpen={true}>
        <DialogBody className="dialogBody">
          <div className="bodyText">
            <Trans i18nKey="PersonalDataPage.downloadConfirmDialog.bodyText">Input your password to download</Trans>
          </div>
          <form
            className="form"
            onSubmit={event => {
              event.preventDefault()
            }}>
            <FormGroup>
              <InputGroup
                className="inputRedeem"
                type="password"
                value={password}
                placeholder={t('PersonalDataPage.form.passwordPlaceholder')}
                onChange={this.onPasswordChange}
              />
              {this.renderErrorType(this.validation.get('password'))}
            </FormGroup>
          </form>
        </DialogBody>
        <DialogFooter className="dialogFooter">
          <div className="btnContainer">
            <Button
              className="btn btn-ghost big btnCancel"
              buttonType={ButtonType.TEXT}
              buttonStyle={ButtonStyle.NONE}
              onClick={() => {
                if (onCancel) onCancel()
              }}>
              <Trans i18nKey="PersonalDataPage.downloadConfirmDialog.cancel">Cancel</Trans>
            </Button>
            <Button
              className="btn btn-primary big btnDownload"
              onClick={() => {
                if (onConfirm) {
                  onConfirm(dateRequest, password)
                }
              }}>
              <Trans i18nKey="PersonalDataPage.cancelDialogConfirm.download">Download</Trans>
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    )
  }
}
