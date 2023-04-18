/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useEffect, useState } from 'react'
import { DesktopChecker } from '@accelbyte/sdk'
// import { UIEvent } from '@od-shared/app-events/UIEvent'
import { LanguageSelector } from '@od-components/components/LanguageSelector/LanguageSelector'
import classNames from 'classnames'
// import bgCommon from '@od-assets/images/bg-common.svg'
import styles from './LinkAccountWithOneTimeCodePage.module.scss'
import { OneTimeCodeForm } from './OneTimeCodeForm'
import { SelectLinkMode } from './SelectLinkMode/SelectLinkMode'
import { HeaderLogoContainer } from '@od-account/components/HeaderLogoContainer'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'

enum LinkAccountStep {
  'oneTimeCode' = 'oneTimeCode',
  'selectLinkMode' = 'selectLinkMode'
}

interface State {
  step: keyof typeof LinkAccountStep
  oneTimeLinkCode: string
}

export const LinkAccountWithOneTimeCodePage = () => {
  const [state, setState] = useState<State>({
    step: LinkAccountStep.oneTimeCode,
    oneTimeLinkCode: ''
  })

  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()

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
    const searchParams = new URLSearchParams(historyState.location.search)
    const oneTimeLinkCode = searchParams.get('oneTimeLinkCode')

    if (oneTimeLinkCode) {
      updateState({ oneTimeLinkCode, step: LinkAccountStep.selectLinkMode })
    }
  }, [])

  const onRestart = () => {
    updateState({ step: LinkAccountStep.oneTimeCode })
    historyState.replace(routesState.linkAccountOneTimeCode.link)
  }

  const goToSelectLinkModeStep = (oneTimeLinkCode: string) => {
    updateState({ oneTimeLinkCode, step: LinkAccountStep.selectLinkMode })
  }

  return (
    <div className={classNames(styles.oneTimeLinkAccountPage, { [styles.desktop]: DesktopChecker.isDesktopApp() })}>
      <LanguageSelector className={styles.languageSelector} />
      <div className={classNames(styles.container)}>
        <HeaderLogoContainer />
        <div className={styles.form}>
          {state.step === LinkAccountStep.oneTimeCode && <OneTimeCodeForm onContinue={goToSelectLinkModeStep} />}
          {state.step === LinkAccountStep.selectLinkMode && (
            <SelectLinkMode oneTimeLinkCode={state.oneTimeLinkCode} onRestart={onRestart} />
          )}
        </div>
      </div>
    </div>
  )
}
