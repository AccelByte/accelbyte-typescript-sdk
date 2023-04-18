/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DataRetrievalStatus } from '@od-account/utils/AccountUtils'
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { CommonError } from '@od-components/components/CommonError'
import { Form, FormGroup, FormGroupError } from '@od-components/components/Form/FormGroup/FormGroup'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { Loading } from '@od-components/components/Loading/Loading'
import { Pagination } from '@od-components/components/Pagination/Pagination'
import { t } from '@od-components/i18n/index'
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import classNames from 'classnames'
import { parseISO, isPast } from 'date-fns'
import { validateComplexPassword, ValidateComplexPasswordErrorType, Validation } from '@accelbyte/validator'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import { CancelConfirmDialog } from './CancelConfirmDialog'
import { DownloadConfirmDialog } from './DownloadConfirmDialog'
import './PersonalData.scss'
import { requestStatusIcon } from './RequestStatusIcon'
import { mockPassword, mockUserPersonalData } from '@od-shared/mocks/MockVars'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { useGdpr } from '~/hooks/gdpr/useGdpr'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { DateUtils } from '~/utils/DateUtils'
import { FetchStatus } from '~/constants/fetch-statuses'
import { UserPersonalData } from '@accelbyte/sdk-gdpr'

interface Props {
  isPreviewMode?: boolean
}

interface State {
  password: string
  selectedRequestDate: string | null
  openCancelDialog: boolean
  openDownloadDialog: boolean
  alert: AlertValue | null
}

export const PersonalDataPage = ({ isPreviewMode }: Props) => {
  const validation = React.useRef<
    Validation<{
      password: ValidateComplexPasswordErrorType
    }>
  >(new Validation())

  const [state, setState] = React.useState<State>({
    password: '',
    selectedRequestDate: null,
    openCancelDialog: false,
    openDownloadDialog: false,
    alert: null
  })
  const { password, selectedRequestDate, openCancelDialog, openDownloadDialog, alert } = state

  const {
    state: { gdprDataRequestList: gdprDataRequestListState, gdprRequestFetchStatus, gdprDataRequestListFetchStatus },
    mutations: { fetchGdprRequestDataList, requestGdprData, cancelRequestGdprData, downloadGdprData }
  } = useGdpr()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const {
    state: { user }
  } = useUserInfo()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    const page = getCurrentPage()
    const hasValidPage = !Number.isNaN(page) && page >= 1

    if (!hasValidPage) {
      historyState.replace(`${historyState.location.pathname}?page=1`)
    }
  }, [historyState.location.search, historyState.location.pathname])

  useEffect(() => {
    if (isPreviewMode) return

    if (user?.userId) {
      getGdprRequestDataList(user?.userId)
    }
  }, [user?.userId, historyState.location.search])

  const formatSelectedDate = (selectedDate: string) => {
    // format selected date to RFC3339 format
    // without millisecond
    const date = new Date(selectedDate)
    return `${date.toISOString().substring(0, 19)}Z`
  }

  const getGdprRequestDataList = async (userId: string) => {
    const page = getCurrentPage()
    const result = await fetchGdprRequestDataList(userId, getOffset(page), getLimit())
    if (result?.error) {
      setErrorAlert(result.error)
    }
  }

  const getCurrentPage = () => {
    return Number(UrlUtils.silentSearchParamsBuilder(historyState.location.search).get('page'))
  }

  const getLimit = () => {
    const pageSize = 10
    return pageSize
  }

  const getOffset = (page: number): number => {
    return page ? (page - 1) * getLimit() : 0
  }

  const notifyRequestSuccess = (): void => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="PersonalDataPage.successRequest">Request sent! Please check the status of your request below.</Trans>
      }
    })
  }

  const notifyRequestCancellation = (): void => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="PersonalDataPage.successCancel">Your personal data request has been canceled</Trans>
      }
    })
  }

  const setErrorAlert = (error: Error | unknown): void => {
    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const clearNotification = () => updateState({ alert: null })

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const password = event.target.value
    validation.current.set('password', validateComplexPassword(password))
    updateState({ password })
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    updateState({ password: '' })

    if (user?.userId) {
      const result = await requestGdprData(password, user.userId)
      if (result.error) {
        setErrorAlert(result.error)
        return
      }

      notifyRequestSuccess()
      getGdprRequestDataList(user.userId)
    }
  }

  const cancelRequest = async (selectedRequestDate: string | null) => {
    const userId = user?.userId
    if (selectedRequestDate && userId) {
      try {
        const result = await cancelRequestGdprData(selectedRequestDate, userId)
        if (result.error) throw result.error

        notifyRequestCancellation()
      } catch (error) {
        setErrorAlert(error)
      } finally {
        getGdprRequestDataList(userId)
        updateState({ openCancelDialog: false })
      }
    }
  }

  const downloadGdpr = async (selectedRequestDate: string | null, password: string | null) => {
    const userId = user?.userId
    if (!selectedRequestDate || !password || !userId) return

    try {
      const result = await downloadGdprData(selectedRequestDate, password, userId)
      if (result.error) throw result.error

      window.open(result.data.URL, '_blank')
    } catch (error) {
      setErrorAlert(error)
    } finally {
      getGdprRequestDataList(userId)
      updateState({ openDownloadDialog: false })
    }
  }

  const isRequestingGdpr = gdprRequestFetchStatus === FetchStatus.REQUESTING
  const isFetchingGdprDataRequest = gdprDataRequestListFetchStatus === FetchStatus.FETCHING
  const isDisabledSubmitBtn = !validation.current.isAllValid() || !password || isRequestingGdpr
  const isInEditor = isPreviewMode
  const gdprDataRequestList = !isInEditor ? gdprDataRequestListState : mockUserPersonalData
  const dataRequestLength = gdprDataRequestList ? gdprDataRequestList.Data.length : 0

  const Paging = gdprDataRequestList?.Paging
  const hasNext = !!Paging?.Next
  const hasPrev = !!Paging?.Previous
  const currentPage = getCurrentPage()

  return (
    <>
      <AccountMainSection>
        <AccountMainSectionHeader>
          <Trans i18nKey="PersonalDataPage.title">Personal Data Request</Trans>
        </AccountMainSectionHeader>
        <AccountMainSectionBody>
          <div className="personalDataPage">
            <section className="formSection">
              <div className={classNames('guideHeading', OverrideCSS.TITLE_FONT)}>
                <Trans i18nKey="PersonalDataPage.guideHeading">Download Personal Data</Trans>
              </div>

              <div className="guideText">
                <Trans i18nKey="PersonalDataPage.guide">
                  Collecting your data may take up to 28 days. Once your data has been collected, you will have a limited amount of time to
                  download the data.
                </Trans>
              </div>

              <h3 className="formTextTitle">
                <Trans i18nKey="PersonalDataPage.inputPasswordTitle">Input your password to proceed</Trans>
              </h3>

              <Form onSubmit={onSubmit} className="form" orientation="horizontal">
                <FormGroup>
                  <InputGroup
                    className="inputRedeem"
                    type="password"
                    value={!isInEditor ? password : mockPassword}
                    placeholder={t('PersonalDataPage.form.passwordPlaceholder')}
                    onChange={onPasswordChange}
                    readOnly={isInEditor}
                  />
                  <ErrorMessage errorType={validation.current.get('password')} />
                </FormGroup>
                <Button disabled={isDisabledSubmitBtn} className="btn btn-primary buttonSendRequest" type="submit">
                  {isRequestingGdpr ? (
                    <Trans i18nKey={'PersonalDataPage.processing'}>Processing...</Trans>
                  ) : (
                    <Trans i18nKey={'PersonalDataPage.buttonAction'}>Send Request</Trans>
                  )}
                </Button>
              </Form>

              {!!alert && (
                <Alert type={alert.type} className="alertContainer" onDismiss={clearNotification}>
                  {alert.element}
                </Alert>
              )}
            </section>

            <section className="fileSection">
              {isFetchingGdprDataRequest && (
                <div className="loadingContainer">
                  <Loading className="loading" />
                </div>
              )}

              {!isFetchingGdprDataRequest && gdprDataRequestList && (
                <>
                  <h1 className="title">
                    <Trans i18nKey="PersonalDataPage.filesTitle">Files</Trans> ({dataRequestLength})
                  </h1>

                  {dataRequestLength > 0 ? (
                    <>
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <Trans i18nKey="PersonalDataPage.table.date">Date</Trans>
                            </th>
                            <th>
                              <Trans i18nKey="PersonalDataPage.table.status">Status</Trans>
                            </th>
                            <th>
                              <Trans i18nKey="PersonalDataPage.table.fileExpiration">File expiration</Trans>
                            </th>
                            <th colSpan={2}>&nbsp;</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {gdprDataRequestList.Data.map((dataRequest: UserPersonalData, index: number) => (
                            <ListDataRequest
                              key={`request-list-${index}`}
                              dataRequest={dataRequest}
                              onDownload={() =>
                                !isInEditor &&
                                updateState({
                                  openDownloadDialog: true,
                                  selectedRequestDate: formatSelectedDate(dataRequest.RequestDate)
                                })
                              }
                              onCancel={() =>
                                !isInEditor &&
                                updateState({
                                  openCancelDialog: true,
                                  selectedRequestDate: formatSelectedDate(dataRequest.RequestDate)
                                })
                              }
                            />
                          ))}
                        </tbody>
                      </table>

                      <div className="pagination">
                        <Pagination
                          next={hasNext && `${routesState.account.personalData.makePath({ query: { page: currentPage + 1 } })}`}
                          prev={hasPrev && `${routesState.account.personalData.makePath({ query: { page: currentPage - 1 } })}`}
                        />
                      </div>
                    </>
                  ) : (
                    <p className="noData">
                      <Trans i18nKey="PersonalDataPage.noData">No files available</Trans>
                    </p>
                  )}
                </>
              )}
            </section>
          </div>
        </AccountMainSectionBody>
      </AccountMainSection>

      {openCancelDialog && (
        <CancelConfirmDialog
          onCancel={() => updateState({ openCancelDialog: false, selectedRequestDate: null })}
          onConfirm={() => cancelRequest(selectedRequestDate)}
        />
      )}

      {openDownloadDialog && (
        <DownloadConfirmDialog
          dateRequest={selectedRequestDate}
          onCancel={() => updateState({ openDownloadDialog: false })}
          onConfirm={downloadGdpr}
        />
      )}
    </>
  )
}

const ErrorMessage = ({ errorType }: { errorType: ValidateComplexPasswordErrorType | null }) => {
  if (errorType === ValidateComplexPasswordErrorType.enum.empty) {
    return (
      <FormGroupError>
        <Trans i18nKey="PersonalDataPage.inputPasswordForm.inputPasswordError.empty">Input your password to proceed</Trans>
      </FormGroupError>
    )
  }
  return null
}

const DownloadAction = ({
  isDataRequestComplete,
  isFileExpired,
  onDownload
}: {
  isDataRequestComplete: boolean
  isFileExpired: boolean
  onDownload: () => void
}) => {
  return (
    <>
      {isDataRequestComplete && !isFileExpired && (
        <div className="btnDownload" onClick={onDownload}>
          <Trans i18nKey="PersonalDataPage.action.download">Download</Trans>
        </div>
      )}
    </>
  )
}

const CancelAction = ({
  isDataRequestComplete,
  isDataRequestFailed,
  isDataRequestCanceled,
  onCancel
}: {
  isDataRequestComplete: boolean
  isDataRequestFailed: boolean
  isDataRequestCanceled: boolean
  onCancel: () => void
}) => {
  return (
    <>
      {!isDataRequestComplete && !isDataRequestFailed && !isDataRequestCanceled ? (
        <div className="btnCancel" onClick={onCancel}>
          <Trans i18nKey="PersonalDataPage.action.cancel">Cancel</Trans>
        </div>
      ) : (
        <span className="btnCancel disabled">
          <Trans i18nKey="PersonalDataPage.action.cancel">Cancel</Trans>
        </span>
      )}
    </>
  )
}

const getExpirationDate = (isFileExpired: boolean, expirationDate: string, isDataRequestComplete: boolean): string | React.ReactNode => {
  if (!isDataRequestComplete) return '-'

  if (isFileExpired) {
    return <Trans i18nKey="PersonalDataPage.fileExpired">file expired</Trans>
  }

  return DateUtils.formatDate(parseISO(expirationDate), { type: 'dynamic', format: 'LLLL' })
}

const ListDataRequest = ({
  dataRequest,
  onDownload,
  onCancel
}: {
  dataRequest: UserPersonalData
  onDownload: () => void
  onCancel: () => void
}) => {
  const isDataRequestComplete = dataRequest.Status === DataRetrievalStatus.enum.Completed
  const isDataRequestFailed = dataRequest.Status === DataRetrievalStatus.enum.Failed
  const isDataRequestCanceled = dataRequest.Status === DataRetrievalStatus.enum.Canceled
  const isFileExpired = isPast(parseISO(dataRequest.DataExpirationDate))
  const dataRequestParseResult = DataRetrievalStatus.safeParse(dataRequest.Status)

  return (
    <tr key={dataRequest.RequestDate} className="tableRow">
      <td className="date">{DateUtils.formatDate(parseISO(dataRequest.RequestDate), { type: 'dynamic', format: 'LL' })}</td>
      <td className="statusContainer">
        <span className="statusIcon">{dataRequestParseResult.success && requestStatusIcon(dataRequestParseResult.data)}</span>
        {dataRequest.Status}
      </td>
      <td>{getExpirationDate(isFileExpired, dataRequest.DataExpirationDate, isDataRequestComplete)}</td>
      <td>
        <DownloadAction isDataRequestComplete={isDataRequestComplete} isFileExpired={isFileExpired} onDownload={onDownload} />
      </td>
      <td>
        <CancelAction
          isDataRequestComplete={isDataRequestComplete}
          isDataRequestFailed={isDataRequestFailed}
          isDataRequestCanceled={isDataRequestCanceled}
          onCancel={onCancel}
        />
      </td>
    </tr>
  )
}
