/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import classNames from 'classnames'
import React from 'react'
import styles from './LogoutConfirmationModal.module.scss'

interface Props {
  onLogout: () => void
  onClose: () => void
  isOpen: boolean
}

export const LogoutConfirmationModal = ({ onLogout, onClose, isOpen }: Props) => (
  <Dialog title={t('LogoutConfirmationModal.title')} isOpen={isOpen} className={classNames(styles.logoutConfirmationModal)}>
    <DialogBody>
      <p>{t('LogoutConfirmationModal.content')}</p>
    </DialogBody>
    <DialogFooter className="dialogFooter">
      <Button className="btn big btn-ghost btnClose footer-btn" onClick={onClose}>
        {t('UserSessionList.dialog.cancel')}
      </Button>
      <Button className="btn big btn-primary btnLogout footer-btn" onClick={onLogout}>
        {t('UserSessionList.dialog.logout')}
      </Button>
    </DialogFooter>
  </Dialog>
)
