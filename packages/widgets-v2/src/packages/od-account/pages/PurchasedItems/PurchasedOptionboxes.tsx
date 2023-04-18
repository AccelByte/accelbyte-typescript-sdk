/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { PurchasedOptionboxDialog } from '@od-account/pages/PurchasedItems/PurchasedOptionboxDialog'
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import { Pagination } from '@od-components/components/Pagination/Pagination'
import { AlertType } from '@od-shared/models/Alert'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { PurchasedItemsHooks } from '@od-account/hooks/PurchasedItemsHooks'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { FetchStatus } from '~/constants/fetch-statuses'
import { EntitlementInfo, EntitlementPagingSlicedResult } from '@accelbyte/sdk-platform'

interface PurchasedOptionboxesProps {
  page: number
}

interface State {
  selectedOptionbox: EntitlementInfo | null
  isSuccessMessageShown: boolean
}

export function PurchasedOptionboxes({ page }: PurchasedOptionboxesProps) {
  const [state, setState] = useState<State>({
    selectedOptionbox: null,
    isSuccessMessageShown: false
  })

  const {
    state: { optionboxEntitlements, optionboxEntitlementsFetchStatus, optionboxEntitlementsError },
    mutations: { fetchOwnedOptionboxes }
  } = PurchasedItemsHooks.usePurchasedOptionboxes()

  const {
    state: { user }
  } = useUserInfo()
  const userId = user?.userId

  useEffect(() => {
    if (!userId || !page) return

    fetchOwnedOptionboxes({ userId, page })
  }, [userId, page])

  const onOpenOptionboxDialog = (entitlement: EntitlementInfo) => {
    setState(oldState => ({
      ...oldState,
      selectedOptionbox: entitlement
    }))
  }

  const onCloseOptionboxDialog = (isSuccessMessageShown: boolean) => {
    setState({ selectedOptionbox: null, isSuccessMessageShown })

    if (isSuccessMessageShown && userId) {
      fetchOwnedOptionboxes({ userId, page })
    }
  }

  const closeSuccessMessage = () => {
    setState(oldState => ({ ...oldState, isSuccessMessageShown: false }))
  }

  const isFetching = optionboxEntitlementsFetchStatus === FetchStatus.FETCHING
  const error = optionboxEntitlementsError
  const { selectedOptionbox, isSuccessMessageShown } = state

  return (
    <div>
      {isSuccessMessageShown && (
        <Alert type={AlertType.success} onDismiss={closeSuccessMessage} className="mb-6">
          <Trans i18nKey="PurchasedItem.optionbox.successClaim">Successfully claim the item</Trans>
        </Alert>
      )}

      {isFetching && <Loading className="mt-6" />}

      {!isFetching && error && (
        <div className="container mx-auto my-8">
          <CommonError error={error} />
        </div>
      )}

      {!isFetching && !!optionboxEntitlements?.data?.length && (
        <OrderTable entitlements={optionboxEntitlements} onClick={onOpenOptionboxDialog} currentPage={page} />
      )}

      {!isFetching && !optionboxEntitlements?.data?.length && (
        <div className="text-center">
          <Trans i18nKey="MyGameList.productKey.notFound">Not Found</Trans>
        </div>
      )}

      {!!selectedOptionbox && <PurchasedOptionboxDialog selectedOptionbox={selectedOptionbox} onClose={onCloseOptionboxDialog} />}
    </div>
  )
}

// Composing components.
const OrderTable = ({
  entitlements,
  onClick,
  currentPage
}: {
  entitlements: EntitlementPagingSlicedResult | null
  onClick: (entitlement: EntitlementInfo) => void
  currentPage: number
}) => {
  const { state: routes } = useRoutes()

  const paging = entitlements?.paging
  const hasNext = !!paging?.next
  const hasPrev = !!paging?.previous

  return (
    <>
      <div className="border-gray-80 mb-4 hidden border-b py-2 md:flex">
        <div className="flex w-1/2 flex-col md:w-4/5 md:flex-row">
          <p className="text-sm text-[color:rgb(var(--od-rgb-text),0.65)] md:w-1/2">
            <Trans i18nKey="PurchasedItem.optionbox.table.name">Name</Trans>
          </p>
          <p className="text-sm text-[color:rgb(var(--od-rgb-text),0.65)] md:w-1/2">
            <Trans i18nKey="PurchasedItem.optionbox.table.count">Count</Trans>
          </p>
        </div>
      </div>
      {entitlements?.data?.map((optionbox, index: number) => {
        return (
          <div className="border-gray-80 my-6 flex border-b pb-6 md:mb-4 md:mt-0 md:pb-4" key={index}>
            <div className="flex w-1/2 flex-col md:w-4/5 md:flex-row md:items-center">
              <div className="text-sm text-[color:rgb(var(--od-rgb-text))] md:w-1/2">
                <p>{optionbox.name}</p>
              </div>
              <div className="mt-4 text-sm text-[color:rgb(var(--od-rgb-text),0.65)] md:mt-0 md:w-1/2">{optionbox.useCount}</div>
            </div>
            <div className="flex w-1/2 flex-col items-end md:w-1/5 md:flex-row md:items-center md:text-right">
              <button className="text-blue-40 text-sm font-medium" onClick={() => onClick(optionbox)}>
                <Trans i18nKey="PurchasedItem.optionbox.table.openOptionBox">Open Option Box</Trans>
              </button>
            </div>
          </div>
        )
      })}

      <div className="flex justify-center">
        <Pagination
          next={hasNext && `${routes.account.purchasedItems.optionboxes.link}?page=${currentPage + 1}`}
          prev={hasPrev && `${routes.account.purchasedItems.optionboxes.link}?page=${currentPage - 1}`}
        />
      </div>
    </>
  )
}
