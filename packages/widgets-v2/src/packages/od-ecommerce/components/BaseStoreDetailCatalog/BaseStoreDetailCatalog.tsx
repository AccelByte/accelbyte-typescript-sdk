/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { WarningIcon } from '@od-components/components/Icons/WarningIcon'
import { Loading } from '@od-components/components/Loading/Loading'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { AlertType } from '@od-shared/models/Alert'
import { ItemPublishingContent } from '@od-shared/models/Cms'
import { EntitlementType, ItemType } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { PaymentConstraint } from '@od-shared/utils/PurchaseHelper'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { isBefore, isValid } from 'date-fns'
import { AppInfo, ItemInfo, OrderInfo, OrderStatus, Ownership, RegionDataItem } from '@accelbyte/sdk-platform'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import './BaseStoreDetailCatalog.scss'
import { PlayButton } from './PlayButton'
import { PriceList } from './PriceList'
import { PurchaseAccessibleItemDialog } from './PurchaseAccessibleItemDialog'
import { PurchaseButton } from './PurchaseButton'
import { UserBannedAlert } from './UserBannedAlert'
import { mockPaymentConstraint, mockUser } from '@od-shared/mocks/MockVars'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useSubscription } from '~/hooks/platform/useSubscription'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { SubscriptionHelper } from '../../helpers/SubscriptionHelper'
import { OpenLibraryLauncherButton } from '../OpenLibraryLauncherButton/OpenLibraryLauncherButton'
import { PurchaseConstants } from '@od-ecommerce/constants/PurchaseConstants'
import { PurchaseDialog } from '../PurchaseDialog/PurchaseDialog'
import { FetchStatus } from '~/constants/fetch-statuses'
import { OrderHelper } from '@od-ecommerce/helpers/OrderHelper'
import { useSdk, useSdkOptions } from '~/hooks/useSdk'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { PurchaseRequirementUnmatchListDialog } from '../PurchaseRequirementUnmatchListDialog/PurchaseRequirementUnmatchListDialog'
import { DownloadLauncherDialog } from '../DownloadLauncherDialog/DownloadLauncherDialog'
import { ClaimSuccessDialog } from '../ClaimStatusDialog/ClaimSuccessDialog'
import { PaymentStatusSuccessDialog } from '../PaymentStatusDialog/PaymentStatusDialog'
import { ClaimFailedDialog } from '../ClaimStatusDialog/ClaimFailedDialog'
import { DesktopChecker, UrlHelper } from '@accelbyte/sdk'
import { IamHelper, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

interface BaseStoreDetailCatalogProps {
  item: ItemInfo
  itemsInBundle?: ItemInfo[] | null
  itemPublishingContent?: ItemPublishingContent | null
  additionalAppInfo?: AppInfo | null
  launcherGoToLibraryButton?: JSX.Element
  initialActiveDialog?: keyof typeof OPEN_DIALOG_ENUM.enum
  previewMode?: 'base' | 'checkout'
}

const OPEN_DIALOG_ENUM = z.enum([
  'PURCHASE',
  'DOWNLOAD_LAUNCHER',
  'CLAIM_SUCCESS',
  'CLAIM_FAILED',
  'PAYMENT_SUCCESS',
  'PURCHASE_ACCESSIBLE_ITEM',
  'PURCHASING_REQUIREMENT_ERROR'
])

interface State {
  selectedRegionData: RegionDataItem | null
  purchaseQuantity: number
  createdOrder: OrderInfo | null
  activeDialog: keyof typeof OPEN_DIALOG_ENUM.enum | null
}

const MAX_SHOW_UNMET_ITEM_PURCHASE_REQUIREMENT = 3

export const BaseStoreDetailCatalog = ({
  item,
  additionalAppInfo,
  previewMode,
  itemPublishingContent,
  itemsInBundle,
  initialActiveDialog,
  launcherGoToLibraryButton
}: BaseStoreDetailCatalogProps) => {
  const [state, setState] = useState<State>({
    selectedRegionData: null,
    purchaseQuantity: 1,
    createdOrder: null,
    activeDialog: initialActiveDialog || null
  })

  const [sdk] = useSdk()
  const [sdkOptions] = useSdkOptions()
  const {
    state: { flags }
  } = useDiscoveryConfigs()
  const {
    state: { user }
  } = useUserInfo()
  const { state: history } = useHistory()
  const { state: routes } = useRoutes()

  // Purchase information.
  const {
    state: { entitledSku }
  } = useSubscription()

  // We don't need to fetch here since it'll be done in the parent component.
  const {
    state: { prepurchaseInformation, prepurchaseInformationFetchStatus, purchaseProcessFetchStatus, purchaseProcessError },
    mutations: { prepareOrderProcess, purchase, onOrderCreatedHook, onOrderFulfilledHook }
  } = useOrderProcess()
  const {
    state: { pendingOrders, paymentInfo },
    mutations: { fetchPendingOrders }
  } = usePendingOrders()
  const {
    state: { currencyMap }
  } = useCurrencyMap()

  const itemIsOwned = isItemOwned(prepurchaseInformation?.itemOwnership)

  // Handlers.
  const onOrderCreated = (order: OrderInfo) => {
    if (!currencyMap || !user) return

    const itemIsFree = RegionDataItemHelper.isFree(item.regionData || [])

    if (order.status === OrderStatus.enum.INIT) {
      history.push(
        routes.orders.detail.makePath({
          params: { orderNo: order.orderNo },
          state: { referrer: history.location.pathname }
        })
      )
    }

    if (order.status === OrderStatus.enum.FULFILLED) {
      prepareOrderProcess({ currencyMap, item, userId: user.userId })
      fetchPendingOrders({ itemId: item.itemId, userId: user.userId })

      setState(oldState => ({
        ...oldState,
        activeDialog: itemIsFree ? OPEN_DIALOG_ENUM.enum.CLAIM_SUCCESS : OPEN_DIALOG_ENUM.enum.PAYMENT_SUCCESS
      }))
    }
  }

  const handlePurchaseError = () => {
    const itemIsFree = RegionDataItemHelper.isFree(item.regionData || [])

    if (itemIsFree) {
      setState(oldState => ({ ...oldState, activeDialog: OPEN_DIALOG_ENUM.enum.CLAIM_FAILED }))
    }
  }

  const redirectToLoginPage = () => {
    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL(history.location.pathname)
    window.location.replace(loginURL)
  }

  const handlePurchase = (regionData: RegionDataItem) => {
    const isLoggedIn = !!user
    if (!isLoggedIn) {
      redirectToLoginPage()
      return
    }

    if (!DesktopChecker.isDesktopApp() && isItemAccessible(entitledSku, item)) {
      setState(oldState => ({
        ...oldState,
        activeDialog: OPEN_DIALOG_ENUM.enum.PURCHASE_ACCESSIBLE_ITEM,
        selectedRegionData: regionData,
        purchaseQuantity: 1
      }))
      return
    }

    setState(oldState => ({
      ...oldState,
      activeDialog: OPEN_DIALOG_ENUM.enum.PURCHASE,
      selectedRegionData: regionData,
      purchaseQuantity: 1
    }))
  }

  const claimFreeItem = async () => {
    const CLAIM_QUANTITY = 1
    const userId = user?.userId || null
    const isLoggedIn = !!userId

    if (!isLoggedIn) {
      redirectToLoginPage()
      return
    }

    const freeRegionDatum = RegionDataItemHelper.getFirstFreeRegionDatum(item.regionData || [])
    if (!freeRegionDatum) return

    const { data: createdOrder } = await purchase({
      item,
      userId: user?.userId,
      regionData: freeRegionDatum,
      quantity: CLAIM_QUANTITY,
      returnUrl: DesktopChecker.isDesktopApp()
        ? PurchaseConstants.AVOID_REDIRECT_TO_FILE_PROTOCOL
        : UrlHelper.combineURLPaths(window.location.origin, sdkOptions.baseURL)
    })
    if (createdOrder) {
      setState(oldState => ({ ...oldState, createdOrder }))
      onOrderCreated(createdOrder)
      onOrderCreatedHook({ createdOrder, user, flags })

      if (createdOrder.status === OrderStatus.enum.FULFILLED) {
        onOrderFulfilledHook({ createdOrder, user, flags })
      }
    }
  }

  const closeDialog = () => {
    const { activeDialog } = state
    if (!activeDialog) return
    setState(oldState => ({ ...oldState, activeDialog: null }))
  }

  // Render functions.
  const renderPurchaseDialog = () => {
    const isCheckoutPreview = previewMode !== undefined
    const userId = !isCheckoutPreview ? user?.userId : mockUser.userId
    if (!userId) return null
    return (
      <PurchaseDialog
        title={<Trans i18nKey="BaseStoreDetailCatalog.dialog.purchase.title">Checkout</Trans>}
        item={item}
        onClose={!isCheckoutPreview ? closeDialog : () => null}
        preSelectedRegionData={state.selectedRegionData || undefined}
        isOpen={state.activeDialog === OPEN_DIALOG_ENUM.enum.PURCHASE}
        onOrderCreated={onOrderCreated}
        onPurchaseError={handlePurchaseError}
        isPreviewMode={previewMode === 'checkout'}
      />
    )
  }

  const renderWidgetButton = (paymentConstraints: PaymentConstraint[]) => {
    if (!prepurchaseInformation) return

    const isPurchasing = prepurchaseInformationFetchStatus === FetchStatus.PURCHASING
    const userId = user?.userId

    const { availableItemInfo, baseAppOwnership, purchaseConditionValidation } = prepurchaseInformation

    const itemIsFree = RegionDataItemHelper.isFree(item.regionData || [])
    const pendingOrderExists = !!pendingOrders && pendingOrders.length > 0
    const itemUnavailable = !!(availableItemInfo && availableItemInfo.userPurchaseLimit === 0)
    const isNotMeetPurchaseCondition = !OrderHelper.doesUserMeetPurchaseCondition(userId, purchaseConditionValidation)
    const isAppItem = item.itemType === ItemType.enum.APP
    const isItemRequireBaseApp = doesItemRequireBaseApp({ item, itemsInBundle })
    const isOwnedBaseApp = baseAppOwnership?.owned
    // TODO: remove isDurableInGameItem once AP remove userPurchaseLimit per account for durable in-game item
    const isDurableInGameItem = item.itemType === ItemType.enum.INGAMEITEM && item.entitlementType === EntitlementType.enum.DURABLE
    const isLoggedIn = !!userId

    const isClaimButtonDisabled = (isLoggedIn && isItemRequireBaseApp && !isOwnedBaseApp) || !item.purchasable || itemUnavailable

    switch (true) {
      case previewMode !== undefined:
        return <PurchaseButtonPreview />
      case isAppItem && itemIsOwned && DesktopChecker.isDesktopApp():
        return <LauncherGoToLibraryButton item={item} overriderElement={launcherGoToLibraryButton} />
      case isAppItem && itemIsOwned && !DesktopChecker.isDesktopApp():
        if (itemPublishingContent && UrlUtils.isValidUrl(itemPublishingContent.miniLauncherUrl)) {
          return <MiniLauncherButton itemPublishingContent={itemPublishingContent} />
        }
        return (
          <PlayButton
            onClickPlay={() =>
              setState(oldState => ({
                ...oldState,
                activeDialog: OPEN_DIALOG_ENUM.enum.DOWNLOAD_LAUNCHER
              }))
            }
          />
        )
      case itemIsOwned && (itemUnavailable || isDurableInGameItem):
        return <OwnedButton />
      case !itemIsOwned && item.regionData && itemIsFree:
        return <ClaimButton isDisabled={isClaimButtonDisabled} isPurchasing={isPurchasing} onClaim={claimFreeItem} />
      case paymentConstraints.length === 0:
        return <UnreleasedItemInformation additionalAppInfo={additionalAppInfo} />
      default:
        return (
          <PurchaseButton
            className="purchaseButton"
            isPurchasing={isPurchasing}
            disabled={
              isLoggedIn &&
              (isPurchasing ||
                IamHelper.isUserBanned(user) ||
                pendingOrderExists ||
                itemUnavailable ||
                isNotMeetPurchaseCondition ||
                (isItemRequireBaseApp && !isOwnedBaseApp) ||
                !item.purchasable)
            }
            onPurchase={regionData => handlePurchase(regionData)}
            paymentOptions={paymentConstraints.map(constraint => constraint.paymentOption)}
          />
        )
    }
  }

  const renderPendingOrderAlert = () => {
    if (!pendingOrders || pendingOrders.length === 0) return

    if (paymentInfo && paymentInfo.charging) {
      return (
        <div className="pendingOrderAlertContainer">
          <Alert className="pendingOrderAlert" type={AlertType.info}>
            <div>
              <Trans i18nKey="BaseStoreDetailCatalog.pendingPaymentExist.message">You already have a pending order for this item.</Trans>
            </div>
            <div>
              <Link
                to={routes.account.orderHistory.detail.makePath({
                  params: { orderNo: pendingOrders[0].orderNo }
                })}>
                <Trans i18nKey="CatalogPurchase.pendingPaymentExist.viewOrderDetail">View Order Detail</Trans>
              </Link>
            </div>
          </Alert>
        </div>
      )
    }

    return (
      <div className="pendingOrderAlertContainer">
        <Alert className="pendingOrderAlert" type={AlertType.info}>
          <div>
            <Trans i18nKey="BaseStoreDetailCatalog.pendingOrdersExist.message">
              You already have another pending order that contains this item. Please complete that order before making another purchase.
            </Trans>
          </div>
          <div>
            <Link
              to={routes.orders.detail.makePath({
                params: { orderNo: pendingOrders[0].orderNo },
                state: { referrer: history.location.pathname }
              })}>
              <Trans i18nKey="CatalogPurchaseW.pendingOrdersExist.linkToOrder">Continue to Checkout</Trans>
            </Link>
          </div>
        </Alert>
      </div>
    )
  }

  const renderPurchasingRequirementNotMetTip = () => {
    if (!prepurchaseInformation) return

    const { unmatchedPurchaseRequirementItems, purchaseConditionValidation } = prepurchaseInformation

    if (!unmatchedPurchaseRequirementItems?.length) return
    let unmatchedIDs = unmatchedPurchaseRequirementItems?.map(item => item.itemId) || []
    const unmatchedIncludePurchaseRequirementItems: ItemInfo[] = []
    const unmatchedExcludePurchaseRequirementItems: ItemInfo[] = []

    if (purchaseConditionValidation) {
      const validateDetails = purchaseConditionValidation[0]?.validateDetails || []
      const validateDetailCount = validateDetails.length

      for (let i = 0; i < validateDetailCount; i++) {
        if (unmatchedIDs.length === 0) break

        const predicateValidateResults = validateDetails[i]?.predicateValidateResults || []
        const predicateValidateResultCount = predicateValidateResults.length

        const conditionGroupSettingItem = (item.purchaseCondition?.conditionGroups || [])[i]
        const predicates = conditionGroupSettingItem?.predicates || []

        for (let j = 0; j < predicateValidateResultCount; j++) {
          const { validated, unmatched } = predicateValidateResults[j]
          const { comparison } = predicates[j]

          if (!validated && unmatched) {
            unmatchedIDs = unmatchedIDs.filter(id => unmatched.includes(id))
            switch (comparison) {
              case 'includes':
                unmatchedIncludePurchaseRequirementItems.push(
                  ...unmatchedPurchaseRequirementItems.filter(item => unmatched.includes(item.itemId))
                )
                break
              case 'excludes':
                unmatchedExcludePurchaseRequirementItems.push(
                  ...unmatchedPurchaseRequirementItems.filter(item => unmatched.includes(item.itemId))
                )
                break
            }
          }
        }
      }
    }

    const showMore =
      unmatchedIncludePurchaseRequirementItems.length > MAX_SHOW_UNMET_ITEM_PURCHASE_REQUIREMENT ||
      unmatchedExcludePurchaseRequirementItems.length > MAX_SHOW_UNMET_ITEM_PURCHASE_REQUIREMENT

    return (
      <div className="purchasingRequirementNotMetTip">
        <WarningIcon className="icon-warning" />
        <div>
          <Trans i18nKey="CommonTip.userNotMeetItemPurchaseCondition">
            To purchase this item, you must satisfy the following condition(s):
          </Trans>
          {!!unmatchedIncludePurchaseRequirementItems.length && (
            <>
              <p>
                <Trans i18nKey="CommonTip.userNotMeetIncludeItemPurchaseCondition">Must first purchase below item(s):</Trans>
              </p>
              <ul className="item-list">
                {unmatchedIncludePurchaseRequirementItems.slice(0, MAX_SHOW_UNMET_ITEM_PURCHASE_REQUIREMENT).map(({ title }) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            </>
          )}
          {!!unmatchedExcludePurchaseRequirementItems.length && (
            <>
              <p>
                <Trans i18nKey="CommonTip.userNotMeetExcludeItemPurchaseCondition">Cannot own below item(s):</Trans>
              </p>
              <ul className="item-list">
                {unmatchedExcludePurchaseRequirementItems.slice(0, MAX_SHOW_UNMET_ITEM_PURCHASE_REQUIREMENT).map(({ title }) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            </>
          )}
          {showMore && (
            <button
              className="button-see-more"
              onClick={() => {
                setState(oldState => ({
                  ...oldState,
                  activeDialog: OPEN_DIALOG_ENUM.enum.PURCHASING_REQUIREMENT_ERROR
                }))
              }}>
              <Trans i18nKey="common.seeMore">See More</Trans>
            </button>
          )}
        </div>
      </div>
    )
  }

  const renderPurchaseWidgetContent = () => {
    const effectivePurchaseConstraint = !previewMode ? prepurchaseInformation?.purchaseConstraint : mockPaymentConstraint
    if (!effectivePurchaseConstraint) return

    const { paymentConstraints } = effectivePurchaseConstraint

    return (
      <React.Fragment>
        <div className="priceListContainer">
          {paymentConstraints && paymentConstraints.length > 0 && item.purchasable && (
            <PriceList className="priceList" paymentOptions={paymentConstraints.map(constraint => constraint.paymentOption)} />
          )}
          {!item.purchasable && (
            <div className="unpurchasable-info">
              <Trans i18nKey="BaseStoreDetailCatalog.unpurchasable.info">Sorry, this product is not purchaseable.</Trans>
            </div>
          )}
          {renderWidgetButton(paymentConstraints)}
        </div>
        {renderPurchasingRequirementNotMetTip()}
      </React.Fragment>
    )
  }

  const { activeDialog, createdOrder } = state
  const isFetching = purchaseProcessFetchStatus === FetchStatus.FETCHING

  return (
    <div className="baseStoreDetailCatalog">
      {/* TODO: (minor) find some other ways to render each of these dialogs. */}
      {activeDialog === OPEN_DIALOG_ENUM.enum.PURCHASE && renderPurchaseDialog()}
      {activeDialog === OPEN_DIALOG_ENUM.enum.PURCHASE_ACCESSIBLE_ITEM && (
        <PurchaseAccessibleItemDialog
          item={item}
          onClose={closeDialog}
          onBuy={() =>
            setState(oldState => ({
              ...oldState,
              activeDialog: OPEN_DIALOG_ENUM.enum.PURCHASE
            }))
          }
        />
      )}

      {activeDialog === OPEN_DIALOG_ENUM.enum.PURCHASING_REQUIREMENT_ERROR && (
        <PurchaseRequirementUnmatchListDialog
          unmatchedItems={prepurchaseInformation?.unmatchedPurchaseRequirementItems}
          onCloseDialog={closeDialog}
        />
      )}

      {activeDialog === OPEN_DIALOG_ENUM.enum.DOWNLOAD_LAUNCHER && (
        <DownloadLauncherDialog
          item={item}
          isDialogOpen={activeDialog === OPEN_DIALOG_ENUM.enum.DOWNLOAD_LAUNCHER}
          onCloseDialog={closeDialog}
        />
      )}

      {activeDialog === OPEN_DIALOG_ENUM.enum.CLAIM_SUCCESS && (
        <ClaimSuccessDialog
          item={item}
          itemPublishingContent={itemPublishingContent}
          onCloseDialog={closeDialog}
          launcherGoToLibraryButton={launcherGoToLibraryButton}
        />
      )}

      {activeDialog === OPEN_DIALOG_ENUM.enum.CLAIM_FAILED && <ClaimFailedDialog onCloseDialog={closeDialog} />}

      {activeDialog === OPEN_DIALOG_ENUM.enum.PAYMENT_SUCCESS && createdOrder && (
        <PaymentStatusSuccessDialog orderInfo={createdOrder} onCloseDialog={closeDialog} />
      )}

      {isFetching ? (
        <div className="loadingContainer">
          <Loading />
        </div>
      ) : (
        renderPurchaseWidgetContent()
      )}

      {renderPendingOrderAlert()}

      {purchaseProcessError && <FetchErrorView error={purchaseProcessError} />}

      {IamHelper.isUserBanned(user) && !isFetching && !itemIsOwned && <UserBannedAlert />}
    </div>
  )
}

// Composing components.
function LauncherGoToLibraryButton({ item, overriderElement }: { item: ItemInfo; overriderElement?: JSX.Element }) {
  if (overriderElement) {
    return overriderElement
  }
  return <OpenLibraryLauncherButton item={item} />
}

function MiniLauncherButton({ itemPublishingContent }: { itemPublishingContent: ItemPublishingContent | null }) {
  if (!itemPublishingContent) return null
  return (
    <a className="btn big btn-primary text-uppercase" href={itemPublishingContent.miniLauncherUrl}>
      <Trans i18nKey="BaseStoreDetailCatalog.button.play">PLAY</Trans>
    </a>
  )
}

function ClaimButton({ isDisabled, isPurchasing, onClaim }: { isDisabled: boolean; isPurchasing: boolean; onClaim: () => void }) {
  return (
    <button className="btn btn-primary" onClick={onClaim} disabled={isDisabled}>
      {isPurchasing && <Spinner className={SpinnerStyle.inline} />}
      {!isPurchasing && <Trans i18nKey="BaseStoreDetailCatalog.button.claim">CLAIM NOW</Trans>}
    </button>
  )
}

function OwnedButton() {
  return (
    <button className="btn btn-primary" disabled>
      <Trans i18nKey="BaseStoreDetailCatalog.button.owned">OWNED</Trans>
    </button>
  )
}

function PurchaseButtonPreview() {
  return <button className="btn btn-primary">PURCHASE</button>
}

function UnreleasedItemInformation({ additionalAppInfo }: { additionalAppInfo: AppInfo | null | undefined }) {
  if (additionalAppInfo) {
    const releaseDate = new Date(additionalAppInfo.releaseDate || '')
    if (isValid(releaseDate) && isBefore(new Date(), releaseDate)) {
      return (
        <div className="paymentUnavailable">
          <Trans i18nKey="BaseStoreDetailCatalog.comingSoonDate">Release on {{ releaseDate }}</Trans>
        </div>
      )
    }
  }

  return (
    <div className="paymentUnavailable">
      <Trans i18nKey="BaseStoreDetailCatalog.noPaymentOptions">
        Sorry, this item cannot be purchased yet. Please return to the store to continue shopping.
      </Trans>
    </div>
  )
}

function FetchErrorView({ error }: { error: Error | unknown }) {
  if (ErrorHelper.isAxiosServerError(error)) {
    return (
      <div>
        <Trans i18nKey="BaseStoreDetailCatalog.fetchError.serverError">
          Unable to retrieve entitlement and price information. Please refresh or go back and try again.
        </Trans>
      </div>
    )
  }

  if (ErrorHelper.isAxiosNetworkError(error)) {
    return (
      <div>
        <Trans i18nKey="BaseStoreDetailCatalog.fetchError.networkError">
          Looks like you aren`t connected to the internet. Please check your connection and try again.
        </Trans>
      </div>
    )
  }

  return (
    <div>
      <Trans i18nKey="BaseStoreDetailCatalog.fetchError.unknownError">Something went wrong. Please contact support for assistance.</Trans>
    </div>
  )
}

// Helper functions.
function isItemAccessible(entitledSku: Map<string, boolean>, item: ItemInfo) {
  return item.features && SubscriptionHelper.hasSubscriptions(entitledSku, item.features)
}

function isItemOwned(itemOwnership: Ownership | undefined | null) {
  return !!(itemOwnership && itemOwnership.owned)
}

function doesItemRequireBaseApp({ item, itemsInBundle }: { item: ItemInfo; itemsInBundle: ItemInfo[] | null | undefined }) {
  // When it's an in game item, it automatically requires base app.
  if (item.itemType === ItemType.enum.INGAMEITEM) {
    return true
  }

  // When there is no items in the bundle, then it classifies as not requiring base app.
  if (!itemsInBundle) {
    return false
  }

  // When it's a bundle, then we check first if the bundle includes the app.
  // If there is no app in the bundle, then it classifies as requiring base app.
  if (item.itemType === ItemType.enum.BUNDLE) {
    return itemsInBundle.find(item => item.itemType === ItemType.enum.APP) === undefined
  }

  return false
}
