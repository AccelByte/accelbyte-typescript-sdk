/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AccountPageMobileNavigation } from '@od-account/pages/AcccountPageMobileNavigation'
import { AccountPageDesktopNavigation } from '@od-account/pages/AccountPageDesktopNavigation'
import { getAccountPageNav, NavLinkItem, NavLinkSeparator } from '@od-account/pages/AccountPageNav'
import { InputValidationOutdatedModal } from '@od-account/pages/InputValidationOutdatedModal/InputValidationOutdatedModal'
import { Loading } from '@od-components/components/Loading/Loading'
import { EcommerceErrorCode } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect, useState } from 'react'
import { UserProfilePreview } from '@od-account/pages/UserProfilePreview/UserProfilePreview'
import { useAppState } from '~/hooks/useAppState'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { usePayment } from '~/hooks/platform/usePayment'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useCountries } from '~/hooks/iam/useCountries'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { ErrorEntity } from '@accelbyte/sdk-platform'

interface State {
  listHiddenMenu: Set<string>
}

export interface AccountPageLayoutProps {
  children: React.ReactNode
  backgroundImageUrl?: string
  accountPageNav?: (NavLinkItem | NavLinkSeparator)[]
  isPreviewMode?: boolean
}

export const AccountPageLayout = ({ backgroundImageUrl, children, accountPageNav, isPreviewMode }: AccountPageLayoutProps) => {
  const [state, setState] = useState<State>({
    listHiddenMenu: new Set()
  })
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()
  const { state: userState } = useUserInfo()
  const { state: paymentMethodsState, mutations: paymentMethodsMutations } = usePayment()
  const { state: countriesState, mutations: countriesMutations } = useCountries()
  const { state: routesState } = useRoutes()
  const {
    state: { flags }
  } = useDiscoveryConfigs()
  const appState = useAppState()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  useEffect(() => {
    init(userState.user?.userId)
  }, [userState.user?.userId])

  const init = async (userId?: string) => {
    if (!userId) {
      return
    }

    const newHiddenMenus: Set<string> = new Set()
    const result = await paymentMethodsMutations.getPaymentAccounts(userId)

    if (
      ErrorHelper.isAxiosError(result?.error) &&
      ErrorEntity.safeParse(result?.error?.response?.data)?.success &&
      result?.error?.response?.data.errorCode === EcommerceErrorCode.PAYMENT_METHOD_SAVING_UNSUPPORTED
    ) {
      newHiddenMenus.add(routesState.account.paymentMethods.link)
    }
    updateState({ listHiddenMenu: newHiddenMenus })

    await Promise.allSettled([
      !countriesState.countries?.length && countriesMutations.fetchCountries(),
      !userState.user && appState.fetchAllUserInformation()
    ])

    if (inputValidationsState.validations.length === 0) {
      inputValidationsMutations.fetchValidations()
    }
  }

  const newAccountPageNav = accountPageNav || getAccountPageNav(routesState, flags)
  return (
    <>
      <div
        className="accountPage w-full"
        style={!DesktopChecker.isDesktopApp() && backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}>
        <div className="userProfilePreviewContainer">
          <div className="sideEmptySpace" />
          <section className="accountPageSubpages">
            <UserProfilePreview isPreviewMode={isPreviewMode} />
          </section>
        </div>
        <div className="mainContainer">
          <div className="sidebar">
            <AccountPageDesktopNavigation
              accountPageNav={newAccountPageNav}
              isLoading={paymentMethodsState.paymentAccountsFetchStatus === FetchStatus.FETCHING}
              listHiddenMenu={state.listHiddenMenu}
            />
          </div>
          <div className="sidebar mobile">
            <AccountPageMobileNavigation
              isLoading={paymentMethodsState.paymentAccountsFetchStatus === FetchStatus.FETCHING}
              listHiddenMenu={state.listHiddenMenu}
              accountPageNav={newAccountPageNav}
            />
          </div>
          <section className="accountPageSubpages">
            <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
          </section>
        </div>
      </div>

      <InputValidationOutdatedModal />
    </>
  )
}
