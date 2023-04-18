/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './DeletePaymentDialog.module.scss'

interface Props {
  isDeleting: boolean
  onClose: () => void
  onDelete: () => void
}

export const DeletePaymentDialog = ({ isDeleting, onClose, onDelete }: Props) => {
  return (
    <Dialog isOpen={true} onClose={onClose} title={t('PaymentMethodsPage.dialogTitle')}>
      <DialogBody>Do you want to delete the selected payment method?</DialogBody>
      <DialogFooter className={styles.dialogFooter}>
        <Button
          disabled={isDeleting}
          className="btn btn-ghost btnCancel uppercase"
          buttonType={ButtonType.TEXT}
          buttonStyle={ButtonStyle.NONE}
          onClick={onClose}>
          <Trans i18nKey="PaymentMethodsPage.dialogCancel">Cancel</Trans>
        </Button>
        <Button
          loadingIndicator="SPINNER"
          disabled={isDeleting}
          isLoading={isDeleting}
          className="btn-primary uppercase"
          onClick={onDelete}>
          <Trans i18nKey="PaymentMethodsPage.dialogDelete">Delete</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
