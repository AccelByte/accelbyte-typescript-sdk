/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import { ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { AlertType } from '@od-shared/models/Alert'
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Trans } from 'react-i18next'
import styles from './ProductKeyDialog.module.scss'
import { EntitlementInfo, ItemInfo } from '@accelbyte/sdk-platform'

interface Props {
  onClose: () => void
  selectedProductKey: EntitlementInfo | undefined | null
  codeItems: ItemInfo[] | undefined | null
}

export function ProductKeyDialog({ selectedProductKey, codeItems, onClose }: Props) {
  const [isCopied, setIsCopied] = useState(false)

  if (!selectedProductKey || !codeItems) return null
  const getCurrentCodeItem = codeItems.filter(code => code.itemId === selectedProductKey.itemId)
  const itemCoverImageUrl = ItemHelper.getFilteredImageUrlByTag(getCurrentCodeItem[0].images, ItemImageTag.productCover) || defaultItemImage

  return (
    <Dialog title={t('ProductKeyDialog.title')} isOpen={true}>
      <DialogBody>
        <div className={classNames(styles.productKeyDialog)}>
          {selectedProductKey && (
            <>
              {isCopied && (
                <Alert className={styles.alert} type={AlertType.success} onDismiss={() => setIsCopied(false)}>
                  <Trans i18nKey="ProductKeyDialog.alert.copied">Your key has been copied.</Trans>
                </Alert>
              )}
              <div className={styles.productInfoContainer}>
                <img src={itemCoverImageUrl} alt={ItemImageTag.productCover} loading="lazy" />
                <div className={styles.itemName}>{selectedProductKey.name}</div>
              </div>
              <div className={classNames(styles.copyClipboard)}>
                <p className={styles.productKey}>
                  <Trans i18nKey="ProductKeyDialog.label.productKey">Product Key</Trans>
                </p>
                <div className={styles.grantedKeyContainer}>
                  <input readOnly type="text" className={styles.grantedKey} value={selectedProductKey.grantedCode || ''} />
                  <CopyToClipboard text={String(selectedProductKey.grantedCode)}>
                    <button className={classNames('btn btn-primary', styles.btnCopy)} onClick={() => setIsCopied(true)}>
                      <Trans i18nKey="ProductKeyDialog.button.copy">Copy</Trans>
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogBody>
      <DialogFooter className={styles.dialogFooter}>
        <Button
          className={classNames('btn big btn-ghost uppercase')}
          buttonType={ButtonType.TEXT}
          buttonStyle={ButtonStyle.NONE}
          onClick={onClose}>
          <Trans i18nKey="ProductKeyDialog.button.close">Close</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
