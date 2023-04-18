/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import classNames from 'classnames'
import { Trans } from 'react-i18next'
import { Button, ButtonStyle } from '@od-components/components/Button/Button'
import { Radio } from '@od-components/components/Form/Radio/Radio'
import { WarningIcon } from '@od-components/components/Icons/WarningIcon'
import { t } from '@od-components/i18n/index'
import styles from '../LinkAccountWithOneTimeCodePage.module.scss'
import { LinkAccountDialog } from './LinkAccountDialog'
import { useSdk } from '~/hooks/useSdk'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { AccountProgressionInfo, Iam, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

interface AccountDetailsProps {
  platformName: string
  userName: string
  email?: string
}

class AccountDetails extends React.Component<AccountDetailsProps> {
  render() {
    const { platformName, userName, email } = this.props
    return (
      <div className={styles.accountDetails}>
        <p className={styles.accountDetailsPlatformName}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.accountDetails.name">{{ platformName }} Account</Trans>
        </p>
        <p className="text-2sm">{userName}</p>
        <p className={classNames(styles.accountDetailsEmail, !email && 'italic')}>
          {email || <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.accountDetails.noEmail">no email registered</Trans>}
        </p>
      </div>
    )
  }
}

interface Props {
  platformName: string
  oneTimeLinkCode: string
  onSuccess: () => void
  onError: (error: Error) => void
  currentAccount?: AccountProgressionInfo | null
  headlessAccount?: AccountProgressionInfo | null
}

interface State {
  chosenGames: Map<string, boolean>
  isConfirmDialogOpen: boolean
  isConfirming: boolean
}

export const PickProgression = (props: Props) => {
  const [state, setState] = React.useState<State>({
    chosenGames: new Map(),
    isConfirmDialogOpen: false,
    isConfirming: false
  })

  const [sdk] = useSdk()
  const { state: routesState } = useRoutes()
  const { state: discoveryConfigState } = useDiscoveryConfigs()
  const brandName = discoveryConfigState.discoveryConfigData?.brandName.data.value || ''

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const toggleConfirmDialog = () => {
    setState(prevState => ({ ...prevState, isConfirmDialogOpen: !prevState.isConfirmDialogOpen }))
  }

  const chooseGame = (game: string) => {
    setState(prevState => {
      const { chosenGames } = prevState
      chosenGames.set(game, true)
      return { ...prevState, chosenGames }
    })
  }

  const unchooseGame = (game: string) => {
    setState(prevState => {
      const { chosenGames } = prevState
      chosenGames.set(game, false)

      return { ...prevState, chosenGames }
    })
  }

  const onConfirm = async () => {
    const { isConfirming, chosenGames } = state
    const { oneTimeLinkCode, onError, onSuccess } = props

    try {
      if (isConfirming) return
      updateState({ isConfirming: true })

      await Iam.UsersApi(sdk).createUserMeHeadlesLinkWithProgression({
        oneTimeLinkCode,
        chosenNamespaces: [...chosenGames.keys()].filter(game => chosenGames.get(game))
      })

      updateState({ isConfirmDialogOpen: false, isConfirming: false })
      onSuccess()
    } catch (error) {
      updateState({ isConfirming: false })
      onError(error as Error)
    }
  }

  const onLinkWithAnotherAccount = () => {
    const { createLoginURL } = new IamUserAuthorizationClient(sdk)
    const { oneTimeLinkCode } = props
    const returnPath = routesState.linkAccountOneTimeCode.makePath({ query: { oneTimeLinkCode } }) as string
    const loginURL = createLoginURL(returnPath, undefined, oneTimeLinkCode)
    window.location.replace(loginURL)
  }

  const renderAccountDetailsSection = () => {
    const { platformName, headlessAccount, currentAccount } = props
    const companyName = brandName
    return (
      <>
        <p className={styles.sectionTitle}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.accountDetails.title">Account Details</Trans>
        </p>
        <div className="xs:grid-cols-2 mb-6 grid gap-6">
          <AccountDetails platformName={platformName} userName={headlessAccount?.userName || headlessAccount?.displayName || ''} />
          <AccountDetails
            platformName={companyName}
            userName={currentAccount?.userName || currentAccount?.displayName || ''}
            email={currentAccount?.email || ''}
          />
        </div>
        <hr />
      </>
    )
  }

  const renderGamesTable = () => {
    const { chosenGames } = state
    const { currentAccount, headlessAccount } = props
    const linkedGames = (headlessAccount?.linkedGames || []).concat(currentAccount?.linkedGames || [])

    return (
      <div className={styles.progressionTable}>
        <table>
          <thead>
            <tr>
              <th>
                <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.table.game">Game</Trans>
              </th>
              <th>
                <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.table.migrate">Migrate to Full Account?</Trans>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...new Set(linkedGames)].map(game => {
              const isGameChosen = chosenGames.get(game)
              return (
                <tr key={game}>
                  <td>{game}</td>
                  <td className="flex items-center">
                    <Radio label={t('common.yes')} className="mr-6" checked={isGameChosen} onClick={() => chooseGame(game)} />
                    <Radio label={t('common.no')} checked={isGameChosen === false} onClick={() => unchooseGame(game)} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  const renderGamesSection = () => {
    const { platformName } = props
    const publisherName = brandName
    return (
      <>
        <p className={styles.sectionTitle}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.games.title">{{ platformName }} Games</Trans>
        </p>
        <p className={classNames(styles.description, '!mt-1 mb-6')}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.games.desc">
            You have game progression data in your {{ platformName }} account for the following games. For each game, please select whether
            or not you'd like to migrate your progress to your {{ publisherName }} account.
          </Trans>
        </p>

        <div className={styles.warningTip}>
          <WarningIcon defaultColor={false} className={styles.warningIcon} />
          <p>
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.games.warning">
              If you choose to migrate your progress, your {{ publisherName }} account progress will be replaced with your{' '}
              {{ platformName }} progress for that game.
            </Trans>
          </p>
        </div>

        {renderGamesTable()}
        <hr />
      </>
    )
  }

  const renderConfirmButton = () => {
    const { chosenGames } = state
    const { currentAccount, headlessAccount } = props
    const linkedGames = [...new Set((headlessAccount?.linkedGames || []).concat(currentAccount?.linkedGames || []))]
    const publisherName = brandName

    const areAllGamesMarked = chosenGames.size === linkedGames.length

    return (
      <div className="text-center">
        <Button
          loadingIndicator="SPINNER"
          className="btn btn-primary mx-auto mb-6 w-60 py-2"
          onClick={toggleConfirmDialog}
          disabled={!areAllGamesMarked}>
          {t('Common.confirm')}
        </Button>

        <p className={styles.description}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.linkAnother.question">
            Don't want to link to this existing account?
          </Trans>
        </p>

        <Button className="text-2sm text-primary-60 mx-auto py-2" buttonStyle={ButtonStyle.NONE} onClick={onLinkWithAnotherAccount}>
          <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.linkAnother.action">
            Link with another {{ publisherName }} account
          </Trans>
        </Button>
      </div>
    )
  }

  const { isConfirmDialogOpen, isConfirming } = state

  return (
    <>
      <div className={styles.pickProgression}>
        {renderAccountDetailsSection()}
        {renderGamesSection()}
        {renderConfirmButton()}
      </div>
      {isConfirmDialogOpen && <LinkAccountDialog isConfirming={isConfirming} onCancel={toggleConfirmDialog} onConfirm={onConfirm} />}
    </>
  )
}
