/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK, CurrencyInfo, ItemInfo, OrderInfo, UserResponseV3 } from '@accelbyte/sdk'
import { PaymentWidget, OnClosePaymentDialogHandler } from '@accelbyte/widgets'
import React, { FormEvent } from 'react'

interface ItemInfoState extends ItemInfo {
  price: string
  orders: OrderInfo[]
}

interface PaymentScenarioProps {
  sdk: AccelbyteSDK | null
  user: UserResponseV3 | null
}

export function PaymentScenario({ sdk, user }: PaymentScenarioProps) {
  const [items, setItems] = React.useState<ItemInfoState[] | null>(null)
  const [currencyMap, setCurrencyMap] = React.useState<Map<string, CurrencyInfo> | null>(null)

  const [selectedItem, setSelectedItem] = React.useState<ItemInfoState | null>(null)
  const [order, setOrder] = React.useState<OrderInfo | null>(null)

  React.useEffect(() => {
    const fetchItems = async () => {
      if (!sdk || !user) return null

      const [response, pendingOrders, currencyMapResponse] = await Promise.all([
        sdk.Platform.Item().fetchItemsByCriteria({ queryParams: { appType: 'GAME' } }),
        sdk.Platform.Order().getOrderList({
          userId: user.userId,
          queryParams: {
            // Status of the order, as available in the API docs.
            // https://demo.accelbyte.io/platform/apidocs/#/Order/publicQueryUserOrders.
            status: 'INIT'
          }
        }),
        sdk.Platform.Currency().getCurrencyMap()
      ])

      if (response.response?.data && pendingOrders.response?.data && !currencyMapResponse.error) {
        const currencyMap = currencyMapResponse.value
        const items = response.response.data.data.map(item => {
          let price = '-'

          const matchingRegion = item.regionData?.find(p => currencyMap.get(p.currencyCode) !== undefined)
          const currency = currencyMap.get(matchingRegion?.currencyCode || '')
          if (matchingRegion && currency) {
            const finalPrice = (matchingRegion.price - (matchingRegion.discountAmount || 0)) / Math.pow(10, currency.decimals)
            price = `${matchingRegion.currencyCode}${finalPrice}`
          }

          const itemWithPrice: ItemInfoState = {
            ...item,
            price,
            orders: pendingOrders.response.data.data
          }

          return itemWithPrice
        })

        setItems(items)
        setCurrencyMap(currencyMap)
        setSelectedItem(items[0])
      }
    }

    fetchItems()
  }, [sdk, user])

  const onPurchase = async (event: FormEvent) => {
    event.preventDefault()

    if (!sdk || !currencyMap || !user) {
      console.error('SDK, currency map, or user is not valid')
      return
    }

    if (!selectedItem || !selectedItem.regionData?.[0]) {
      console.error('There is no matching item or no region data available')
      return
    }

    const priceInformation = selectedItem.regionData.find(info => currencyMap.get(info.currencyCode) !== undefined)
    if (!priceInformation) {
      console.error('There is no price that matches the available currencies')
      return
    }

    const { price, currencyCode, discountAmount: discountAmountRaw } = priceInformation
    const discountAmount = discountAmountRaw || 0

    const order = await sdk.Platform.Order().createOrder({
      userId: user.userId,
      data: {
        currencyCode,
        discountedPrice: price - discountAmount,
        itemId: selectedItem.itemId,
        price,
        quantity: 1
      }
    })
    if (!order.response?.data) return

    setOrder(order.response.data)
    const newSelectedItem: ItemInfoState = { ...selectedItem!, orders: [order.response.data, ...selectedItem.orders] }
    setSelectedItem(newSelectedItem)
    setItems(prev => {
      if (!prev) return prev
      const idx = prev.findIndex(item => item.itemId === newSelectedItem.itemId)
      return prev
        .slice(0, idx)
        .concat(newSelectedItem)
        .concat(prev.slice(idx + 1))
    })
  }

  const onClosePaymentDialog: OnClosePaymentDialogHandler = React.useCallback(
    param => {
      if (param.status === 'payment-succeeded' || param.status === 'orders-cancelled') {
        setOrder(null)

        const newSelectedItem: ItemInfoState = { ...selectedItem!, orders: [] }
        setSelectedItem(newSelectedItem)
        setItems(prev => {
          if (!prev) return prev
          const idx = prev.findIndex(item => item.itemId === newSelectedItem.itemId)
          return prev
            .slice(0, idx)
            .concat(newSelectedItem)
            .concat(prev.slice(idx + 1))
        })
      }
    },
    [selectedItem]
  )

  const onViewOrder = (e: FormEvent) => {
    e.preventDefault()

    if (!selectedItem?.orders) return
    setOrder(selectedItem.orders[0])
  }

  const itemHasExistingOrders = selectedItem && selectedItem.orders.length > 0

  return (
    <>
      <form onSubmit={itemHasExistingOrders ? onViewOrder : onPurchase} className="paymentScenario__form">
        <div>
          <label htmlFor="itemId">Select game</label>

          <select id="itemId" name="itemId">
            {items === null ? (
              <option disabled>Fetching items...</option>
            ) : (
              items.map(item => (
                <option key={item.itemId} value={item.itemId}>
                  {item.name} ({item.price})
                </option>
              ))
            )}
          </select>
        </div>

        <button className="paymentScenario__submit-button" disabled={selectedItem === null}>
          {itemHasExistingOrders ? 'View order' : 'Purchase'}
        </button>
      </form>

      <hr />

      {order && <PaymentWidget orderNo={order.orderNo} onClosePaymentDialog={onClosePaymentDialog} />}
    </>
  )
}
