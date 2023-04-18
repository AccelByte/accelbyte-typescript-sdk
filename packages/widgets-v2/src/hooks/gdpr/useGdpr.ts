/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { z } from 'zod'
import { HookDataReturns } from '~/models/hook'
import {
  DataRetrievalResponse,
  DeletionStatus,
  Gdpr,
  RequestDeleteResponse,
  UserDataUrl,
  UserPersonalDataResponse
} from '@accelbyte/sdk-gdpr'

const DeletionMark = z.enum(['MARKED', 'MARK_IGNORED'])
type DeletionMark = z.infer<typeof DeletionMark>

interface GdprState {
  deletionMark: DeletionMark | null
  gdprDeletionStatus: DeletionStatus | null
  gdprDeletionError: FetchErrorType | null
  gdprDeletionFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  requestDeletionFetchStatus: FetchStatus.IDLE | FetchStatus.CANCELLING | FetchStatus.REQUESTING
  requestDeletionError: FetchErrorType | null

  gdprDataRequestList: UserPersonalDataResponse | null
  gdprDataRequestListError: FetchErrorType | null
  gdprDataRequestListFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  gdprRequestFetchStatus: FetchStatus.IDLE | FetchStatus.REQUESTING | FetchStatus.CANCELLING | FetchStatus.DOWNLOADING

  isAccountDeletionSuccessPageLocked: boolean
}

const DEFAULT_STATE: GdprState = {
  deletionMark: null,
  gdprDeletionStatus: null,
  gdprDeletionError: null,
  gdprDeletionFetchStatus: FetchStatus.IDLE,

  requestDeletionFetchStatus: FetchStatus.IDLE,
  requestDeletionError: null,

  gdprDataRequestList: null,
  gdprDataRequestListError: null,
  gdprDataRequestListFetchStatus: FetchStatus.IDLE,
  gdprRequestFetchStatus: FetchStatus.IDLE,

  isAccountDeletionSuccessPageLocked: false
}

export const gdprStore = createStore(DEFAULT_STATE)

export function useGdpr() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(gdprStore)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchGdprDeletionStatus = useCallback(
    async (userId: string): Promise<HookDataReturns<DeletionStatus>> => {
      let gdprDeletionStatus: DeletionStatus | null = null
      let gdprDeletionError: FetchErrorType | null = null

      try {
        setState({ gdprDeletionError: null, gdprDeletionFetchStatus: FetchStatus.FETCHING })

        gdprDeletionStatus = await Gdpr.DataDeletionApi(sdk).getDeletionsStatus_ByUserId(userId)

        return { data: gdprDeletionStatus }
      } catch (error) {
        gdprDeletionError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({ gdprDeletionStatus, gdprDeletionError, gdprDeletionFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const markForDeletion = useCallback(() => {
    setState({ deletionMark: DeletionMark.Enum.MARKED })
  }, [])

  const ignoreDeletionMark = useCallback(() => {
    setState({ deletionMark: DeletionMark.Enum.MARK_IGNORED })
  }, [])

  const cancelDeleteAccount = useCallback(
    async (userId: string): Promise<HookDataReturns<null>> => {
      let requestDeletionError: FetchErrorType | null = null

      try {
        setState({ requestDeletionError, requestDeletionFetchStatus: FetchStatus.CANCELLING })

        await Gdpr.DataDeletionApi(sdk).deleteDeletion_ByUserId(userId)
        return { data: null }
      } catch (error) {
        requestDeletionError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({ requestDeletionError, requestDeletionFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const deleteAccount = useCallback(
    async (userId: string, password: string): Promise<HookDataReturns<RequestDeleteResponse>> => {
      let requestDeletionError: FetchErrorType | null = null

      try {
        setState({ requestDeletionError, requestDeletionFetchStatus: FetchStatus.REQUESTING })

        const data = await Gdpr.DataDeletionApi(sdk).postDeletion_ByUserId(userId, { password })
        return { data }
      } catch (error) {
        requestDeletionError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({ requestDeletionError, requestDeletionFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const updateAccountDeletionSuccessPageLocked = useCallback((isLocked: boolean) => {
    setState({ isAccountDeletionSuccessPageLocked: isLocked })
  }, [])

  const fetchGdprRequestDataList = useCallback(
    async (userId: string, offset?: number, limit?: number): Promise<HookDataReturns<UserPersonalDataResponse>> => {
      let gdprDataRequestList: UserPersonalDataResponse | null = null
      let gdprDataRequestListError: FetchErrorType | null = null

      try {
        setState({ gdprDataRequestListError, gdprDataRequestListFetchStatus: FetchStatus.FETCHING })

        gdprDataRequestList = await Gdpr.DataRetrievalApi(sdk).getRequests_ByUserId(userId, { offset, limit })
        return { data: gdprDataRequestList }
      } catch (error) {
        gdprDataRequestListError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({
          gdprDataRequestList,
          gdprDataRequestListError,
          gdprDataRequestListFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const requestGdprData = useCallback(
    async (password: string | null, userId: string): Promise<HookDataReturns<DataRetrievalResponse>> => {
      try {
        setState({ gdprRequestFetchStatus: FetchStatus.REQUESTING })

        const result = await Gdpr.DataRetrievalApi(sdk).postRequest_ByUserId(userId, { password })
        return { data: result }
      } catch (error) {
        return { error: error as Error }
      } finally {
        setState({ gdprRequestFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const cancelRequestGdprData = useCallback(
    async (requestDate: string, userId: string): Promise<HookDataReturns<null>> => {
      try {
        setState({ gdprRequestFetchStatus: FetchStatus.CANCELLING })
        await Gdpr.DataRetrievalApi(sdk).deleteRequest_ByUserId_ByRequestDate(userId, requestDate)
        return { data: null }
      } catch (error) {
        return { error: error as Error }
      } finally {
        setState({ gdprRequestFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const downloadGdprData = useCallback(
    async (requestDate: string, password: string, userId: string): Promise<HookDataReturns<UserDataUrl>> => {
      try {
        setState({ gdprRequestFetchStatus: FetchStatus.DOWNLOADING })

        const result = await Gdpr.DataRetrievalApi(sdk).postGenerate_ByUserId_ByRequestDate(userId, requestDate, { password })
        return { data: result }
      } catch (error) {
        return { error: error as Error }
      } finally {
        setState({ gdprRequestFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchGdprDeletionStatus,
      markForDeletion,
      ignoreDeletionMark,
      cancelDeleteAccount,
      deleteAccount,
      updateAccountDeletionSuccessPageLocked,
      fetchGdprRequestDataList,
      requestGdprData,
      cancelRequestGdprData,
      downloadGdprData
    }
  }
}
