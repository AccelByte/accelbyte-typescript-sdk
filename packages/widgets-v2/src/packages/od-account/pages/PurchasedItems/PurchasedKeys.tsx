/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import { Pagination } from '@od-components/components/Pagination/Pagination'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { ProductKeyDialog } from './ProductKeyDialog'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { PurchasedItemsHooks } from '../../hooks/PurchasedItemsHooks'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { DateUtils } from '~/utils/DateUtils'
import { EntitlementInfo, EntitlementPagingSlicedResult } from '@accelbyte/sdk-platform'

const DEFAULT_KEYS_PAGE_SIZE = 10

interface PurchasedKeysProps {
  page?: number
}

export function PurchasedKeys({ page = DEFAULT_KEYS_PAGE_SIZE }: PurchasedKeysProps) {
  const {
    state: { user }
  } = useUserInfo()
  const userId = user?.userId

  const [isProductKeyDialogOpen, setIsProductKeyDialogOpen] = useState(false)
  const [selectedProductKey, setSelectedProductKey] = useState<EntitlementInfo | null>(null)

  const { state, mutations } = PurchasedItemsHooks.usePurchasedKeys()

  useEffect(() => {
    if (!userId) return

    mutations.fetchPurchasedKeysInfo({
      fetchProductKeysQueryParams: {
        userId,
        page
      }
    })
  }, [userId])

  const openProductKeyDialog = (arrayNumber: number) => {
    const selectedProductKey = state.purchasedKeysInfo?.keys?.data?.[arrayNumber] || null

    setSelectedProductKey(selectedProductKey)
    setIsProductKeyDialogOpen(true)
  }

  const closeProductKeyDialog = () => {
    setIsProductKeyDialogOpen(false)
  }

  const { purchasedKeysError: error, purchasedKeysFetchStatus: fetchStatus, purchasedKeysInfo } = state
  const isFetching = fetchStatus === FetchStatus.FETCHING

  return (
    <div>
      {isFetching && <Loading className="mt-6" />}

      {!isFetching && error && (
        <div className="container mx-auto my-8">
          <CommonError error={error} />
        </div>
      )}

      {!isFetching && <KeysTable productKeyList={purchasedKeysInfo?.keys} onClick={openProductKeyDialog} currentPage={page} />}
      {isProductKeyDialogOpen && (
        <ProductKeyDialog onClose={closeProductKeyDialog} selectedProductKey={selectedProductKey} codeItems={purchasedKeysInfo?.codes} />
      )}
    </div>
  )
}

// Composing functions.
function KeysTable({
  onClick,
  productKeyList,
  currentPage
}: {
  productKeyList: EntitlementPagingSlicedResult | null | undefined
  onClick: (arrayNumber: number) => void
  currentPage: number
}) {
  const { state: routes } = useRoutes()

  if (!productKeyList?.data || productKeyList.data.length === 0) {
    return (
      <div className="text-center">
        <Trans i18nKey="MyGameList.productKey.notFound">Not Found</Trans>
      </div>
    )
  }

  const paging = productKeyList.paging
  const hasNext = !!paging?.next
  const hasPrev = !!paging?.previous

  return (
    <>
      <div className="border-gray-80 mb-4 hidden border-b py-2 md:flex">
        <div className="flex w-1/2 flex-col md:w-4/5 md:flex-row">
          <p className="text-sm text-[color:rgb(var(--od-rgb-text),0.65)] md:w-1/2">
            <Trans i18nKey="MyGameList.productKey.table.purchaseDate">Purchase Date</Trans>
          </p>
          <p className="text-sm text-[color:rgb(var(--od-rgb-text),0.65)] md:w-1/2">
            <Trans i18nKey="MyGameList.productKey.table.name">Name</Trans>
          </p>
        </div>
      </div>
      {productKeyList?.data &&
        productKeyList.data.map((productKey, index: number) => {
          const purchasedDate = DateUtils.formatDate(productKey.grantedAt, { type: 'dynamic', format: 'LLLL' })
          return (
            <div className="border-gray-80 my-6 flex border-b pb-6 md:mb-4 md:mt-0 md:pb-4" key={index}>
              <div className="flex w-1/2 flex-col md:w-4/5 md:flex-row md:items-center">
                <div className="text-shite text-sm md:w-1/2">
                  <p>{purchasedDate}</p>
                </div>
                <div className="mt-4 text-sm text-[color:rgb(var(--od-rgb-text),0.65)] md:mt-0 md:w-1/2">{productKey.name}</div>
              </div>
              <div className="flex w-1/2 flex-col items-end md:w-1/5 md:flex-row md:items-center md:text-right">
                <button className="text-blue-40 text-sm font-medium" onClick={() => onClick(index)}>
                  <Trans i18nKey="MyGameList.productKey.table.showKey">Show key</Trans>
                </button>
              </div>
            </div>
          )
        })}

      <div className="flex justify-center">
        <Pagination
          next={hasNext && `${routes.account.purchasedItems.keys.link}?page=${currentPage + 1}`}
          prev={hasPrev && `${routes.account.purchasedItems.keys.link}?page=${currentPage - 1}`}
        />
      </div>
    </>
  )
}
