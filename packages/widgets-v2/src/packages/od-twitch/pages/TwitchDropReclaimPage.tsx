/*
 * Copyright (c) 2023-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useState, useEffect } from 'react'
import { ReclaimPanel } from '../components/core/panels/ReclaimPanel/ReclaimPanel'
import { AxiosError } from 'axios'
import { ClaimErrorPanel } from '../components/core/panels/ClaimErrorPanel/ClaimErrorPanel'
import { ClaimSuccessPanel } from '../components/core/panels/ClaimSuccessPanel/ClaimSuccessPanel'
import { LoadingPanel } from '../components/core/panels/LoadingPanel/LoadingPanel'
import { WrongAccountPanel } from '../components/core/panels/WrongAccountPanel/WrongAccountPanel'
import { TwitchDropValidateStatus, TwitchErrorCode } from '../models/enums'
import { LinkedPlatformId } from '@od-shared/models/Linked'
import { CardItemInfo } from '../models/CardItemInfo'
import { useLinkedAccounts } from '~/hooks/iam/useLinkedAccounts'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useSdk } from '~/hooks/useSdk'
import { ItemInfo, Platform, TwitchSyncResultArray } from '@accelbyte/sdk-platform'
import { Iam } from '@accelbyte/sdk-iam'

const gameIdKey = 'AB-Twitch_drops-claim-game_id'
const gameNamespaceKey = 'AB-Twitch_drops-claim-game_namespace'
const gameClientIdKey = 'AB-Twitch_drops-claim-game_client_id'
const gameNameKey = 'AB-Twitch_drops-claim-game_name'
const twitchImageAlias = 'twitch-drop-thumbnail'

interface Props {
  displayName: string
  validateStatus: TwitchDropValidateStatus | null
  retryStatus?: boolean
  onLink: (forceVerify?: boolean, namespace?: string, clientId?: string) => void
  className?: string
}

enum Step {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  CLAIM = 'CLAIM',
  VALIDATE = 'VALIDATE',
  INCORRECT_TWITCH_ACCOUNT = 'INCORRECT_TWITCH_ACCOUNT',
  HOME = 'HOME'
}

export function TwitchDropReclaimPage({ displayName, validateStatus, retryStatus, onLink, className }: Props) {
  const [step, setStep] = useState(Step.HOME)
  const [hasDropEntitlements, setHasDropEntitlements] = useState(true)
  const [retryState, setRetryState] = useState(false)
  const [savedSelectedGameId, setSavedSelectedGameId] = useState('')
  const [savedSelectedGameNamespace, setSavedSelectedGameNamespace] = useState('')
  const [savedClientId, setSavedClientId] = useState('')
  const [savedSelectedGameName, setSavedSelectedGameName] = useState('')
  const [listDropItems, setListDropItems] = useState<CardItemInfo[]>([])

  const { mutations: linkedAccountsMutations } = useLinkedAccounts()
  const {
    state: { user }
  } = useUserInfo()
  const [sdk] = useSdk()

  useEffect(() => {
    const gameId = sessionStorage.getItem(gameIdKey)
    const gameNamespace = sessionStorage.getItem(gameNamespaceKey)
    const gameClientId = sessionStorage.getItem(gameClientIdKey)
    const gameName = sessionStorage.getItem(gameNameKey)

    if (gameId && gameNamespace && gameName && gameClientId) {
      setSavedSelectedGameId(gameId)
      setSavedSelectedGameNamespace(gameNamespace)
      setSavedSelectedGameName(gameName)
      setSavedClientId(gameClientId)
      sessionStorage.removeItem(gameIdKey)
      sessionStorage.removeItem(gameNamespaceKey)
      sessionStorage.removeItem(gameNameKey)
      sessionStorage.removeItem(gameClientIdKey)

      if (validateStatus) {
        setStep(Step.VALIDATE)
      }

      if (retryStatus && !retryState) {
        if (validateStatus === TwitchDropValidateStatus.SUCCESS) {
          claim(gameNamespace, gameId, gameClientId, gameName, true)
        }
      }
    }

    if (step === Step.VALIDATE) {
      if (validateStatus === TwitchDropValidateStatus.SUCCESS) {
        setStep(Step.CLAIM)
      } else if (validateStatus === TwitchDropValidateStatus.FAILED) {
        setStep(Step.INCORRECT_TWITCH_ACCOUNT)
      }
    }
  }, [step, validateStatus, listDropItems, retryStatus])

  const unlinkAccount = async () => {
    await linkedAccountsMutations.unLinkAccount(LinkedPlatformId.Enum.twitch)
    window.location.reload()
  }

  const claim = async (namespace: string, gameId: string = savedSelectedGameId, clientId: string, gameName: string, retry?: boolean) => {
    if (user?.userId) {
      try {
        sessionStorage.setItem(gameIdKey, gameId)
        sessionStorage.setItem(gameNamespaceKey, namespace)
        sessionStorage.setItem(gameClientIdKey, clientId)
        sessionStorage.setItem(gameNameKey, gameName)

        if (retry) setRetryState(true)

        const result = await Platform.IapApi(sdk, { namespace }).updateUserMeIapTwitchSync({ gameId })
        if (result.length === 0) {
          setHasDropEntitlements(false)
          setStep(Step.HOME)
        }
        if (result.length > 0) {
          await handleClaim(result, namespace)
          setHasDropEntitlements(true)
          setStep(Step.SUCCESS)
        }
      } catch (error) {
        setHasDropEntitlements(true)
        if (!retry) {
          handleClaimError(error, gameId, namespace, clientId, gameName)
        } else {
          setStep(Step.ERROR)
        }
      }
    }
  }

  const handleClaimError = async (error: unknown, gameId: string, namespace: string, clientId: string, gameName: string) => {
    if (error instanceof AxiosError) {
      const errorCode = error?.response?.data?.errorCode

      if (errorCode === TwitchErrorCode.INVALID_PLATFORM_TOKEN && step !== Step.CLAIM) {
        sessionStorage.setItem(gameIdKey, gameId)
        sessionStorage.setItem(gameNamespaceKey, namespace)
        sessionStorage.setItem(gameClientIdKey, clientId)
        sessionStorage.setItem(gameNameKey, gameName)
        onLink(true, namespace, clientId)
      } else if ([TwitchErrorCode.ERROR_USER_ID_NOT_LINKED, TwitchErrorCode.ERROR_USER_ID_NOT_LINKED_ALTERNATIVE].includes(errorCode)) {
        try {
          await Iam.UsersApi(sdk).createUserMePlatformJustice_ByTargetNamespace(namespace)
          await claim(namespace, gameId, clientId, gameName)
        } catch (error) {
          setStep(Step.ERROR)
        }
      } else {
        setStep(Step.ERROR)
      }
    } else {
      setStep(Step.ERROR)
    }
  }

  const getDropItemData = async (sku: string, namespace?: string): Promise<ItemInfo | null> => {
    try {
      const result = await Platform.ItemApi(sdk, { namespace }).getItemsBySku({ sku })
      return result
    } catch (error) {
      return null
    }
  }

  const handleClaim = async (data: TwitchSyncResultArray, namespace: string) => {
    const promises = data.filter(item => !!item.itemSku).map(item => (item.itemSku ? getDropItemData(item.itemSku, namespace) : null))

    const results = await Promise.all(promises)
    const combinedData = results
      .map(item => {
        let imageUrl: string | null = null
        if (item?.images) {
          // Try to find the image alias.
          const imageAlias = item.images.find(v => v.as === twitchImageAlias)?.imageUrl
          imageUrl = imageAlias || item.images[0].imageUrl
        }
        return {
          name: item?.name || '',
          imageUrl
        }
      })
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    setListDropItems(combinedData)
  }

  const relogin = () => {
    sessionStorage.setItem(gameIdKey, savedSelectedGameId)
    sessionStorage.setItem(gameNamespaceKey, savedSelectedGameNamespace)
    sessionStorage.setItem(gameClientIdKey, savedClientId)
    sessionStorage.setItem(gameNameKey, savedSelectedGameName)

    onLink(true, savedSelectedGameNamespace, savedClientId)
  }

  const retry = () => {
    setStep(Step.HOME)
  }

  return (
    <>
      {step === Step.HOME && (
        <ReclaimPanel
          displayName={displayName ?? ''}
          onUnlink={unlinkAccount}
          onClaim={claim}
          className={className}
          hasDropEntitlements={hasDropEntitlements}
        />
      )}
      {step === Step.VALIDATE && <LoadingPanel message="Validating user account..." className={className} />}
      {step === Step.CLAIM && <LoadingPanel message="Claiming your drops..." className={className} />}
      {step === Step.SUCCESS && (
        <ClaimSuccessPanel
          namespace={savedSelectedGameNamespace}
          gameName={savedSelectedGameName}
          itemList={listDropItems}
          className={className}
        />
      )}
      {step === Step.ERROR && <ClaimErrorPanel onRetry={retry} className={className} />}
      {step === Step.INCORRECT_TWITCH_ACCOUNT && (
        <WrongAccountPanel displayName={displayName ?? ''} onRelogin={relogin} className={className} />
      )}
    </>
  )
}
