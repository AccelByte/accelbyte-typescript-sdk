/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import styles from '@od-account/pages/PurchasedItems/PurchasedOptionboxDialog.module.scss'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { CheckMarkIcon } from '@od-components/components/Icons/CheckMarkIcon'
import { Loading } from '@od-components/components/Loading/Loading'
import { ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { AlertType } from '@od-shared/models/Alert'
import { EntitlementType } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { PurchasedItemsHooks } from '@od-account/hooks/PurchasedItemsHooks'
import { FetchStatus } from '~/constants/fetch-statuses'
import { EntitlementInfo, EntitlementOwnership, ItemInfo } from '@accelbyte/sdk-platform'

const ALREADY_OWNED_PERMANENT_ITEM_ERROR_CODE = 31177

interface Props {
  onClose: (showSuccessClaim: boolean) => void
  selectedOptionbox: EntitlementInfo | null
}

export function PurchasedOptionboxDialog({ onClose, selectedOptionbox }: Props) {
  const [selectedItemId, setSelectedItemId] = useState('')

  const {
    state: { user }
  } = useUserInfo()
  const userId = user?.userId

  const {
    state: {
      itemsContainedInOptionbox,
      itemsEntitlementStatus,
      itemsEntitlementStatusFetchStatus,
      itemsEntitlementStatusError,

      claimedEntitlementFetchStatus,
      claimedEntitlementError
    },
    mutations: { fetchItemsFromOwnedOptionboxes, claimOptionboxItem }
  } = PurchasedItemsHooks.useClaimOptionbox()

  useEffect(() => {
    if (!selectedOptionbox || !userId) return

    fetchItemsFromOwnedOptionboxes({ optionboxEntitlement: selectedOptionbox, userId })
  }, [selectedOptionbox, userId])

  const onSelectedItemChange = (value: string) => {
    setSelectedItemId(value)
  }

  const onClaim = async () => {
    if (!selectedOptionbox || !userId || !selectedItemId) return

    const result = await claimOptionboxItem({ itemId: selectedItemId, selectedOptionbox, userId })
    if (result.data) {
      onClose(true)
    }
  }

  const isFetching = itemsEntitlementStatusFetchStatus === FetchStatus.FETCHING
  const isClaiming = claimedEntitlementFetchStatus === FetchStatus.CLAIMING

  const fetchError = itemsEntitlementStatusError
  const claimError = claimedEntitlementError

  const errorSubmitCode = ErrorHelper.extractServiceErrorCode(claimError)

  return (
    <Dialog isOpen={true} className={styles.purchasedOptionboxDialog}>
      <DialogBody>
        <div className="titleContainer">
          <h1 className="title">
            <Trans i18nKey="PurchasedItem.optionbox.dialog.title">Option Box Items</Trans>
          </h1>
          <p className="titleDescription">
            <Trans i18nKey="PurchasedItem.optionbox.dialog.description">Please select an item that you want to claim.</Trans>
          </p>
        </div>

        {claimError && (
          <Alert type={AlertType.danger} className="my-6">
            {errorSubmitCode === ALREADY_OWNED_PERMANENT_ITEM_ERROR_CODE ? (
              <Trans i18nKey="PurchasedItem.optionbox.dialog.errorAlreadyOwnedItem">
                Sorry! You already own this item. Please select another item.
              </Trans>
            ) : (
              <CommonError error={claimError} />
            )}
          </Alert>
        )}

        {isFetching && <Loading className="mt-6" />}

        {!isFetching && fetchError && (
          <div className="container mx-auto my-8">
            <CommonError error={fetchError} />
          </div>
        )}

        {!isFetching && !fetchError && itemsContainedInOptionbox && (
          <div className="itemSelection grid grid-cols-4 gap-6">
            {itemsContainedInOptionbox.map((item, index) => (
              <div
                className={classNames('item', {
                  selected: item.itemId === selectedItemId,
                  owned: isItemStatusOwned(itemsEntitlementStatus, item)
                })}
                key={index}
                onClick={() => onSelectedItemChange(item.itemId)}>
                <div className="itemImage">
                  <img
                    alt="productImage"
                    src={ItemHelper.getFilteredImageUrlByTag(item.images, ItemImageTag.productCover) || defaultItemImage}
                    loading="lazy"
                  />
                  <div className="ownedLabel">
                    <Trans i18nKey="PurchasedItem.optionbox.dialog.ownedLabel">Owned</Trans>
                  </div>
                  <div className="selectedMark">
                    <CheckMarkIcon />
                  </div>
                </div>
                <p className="itemName">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </DialogBody>
      <DialogFooter className={styles.dialogFooter}>
        <Button
          className="btn big btn-ghost mr-3 uppercase"
          buttonType={ButtonType.TEXT}
          buttonStyle={ButtonStyle.NONE}
          onClick={() => onClose(false)}>
          <Trans i18nKey="common.close">Close</Trans>
        </Button>

        <Button
          loadingIndicator="SPINNER"
          className="btn btn-primary uppercase"
          onClick={onClaim}
          isLoading={isClaiming}
          disabled={isClaiming || !selectedItemId}>
          <Trans i18nKey="common.claim">Claim</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

// Helper functions.
function isItemStatusOwned(itemEntitlementStatus: Map<string, EntitlementOwnership> | null, item: ItemInfo) {
  if (item.entitlementType === EntitlementType.enum.DURABLE) {
    return !!itemEntitlementStatus?.get(item.itemId)?.owned
  }
  return false
}
