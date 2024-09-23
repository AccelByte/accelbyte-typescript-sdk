/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { DownloadExportedAgreementsInCsvResponse } from '../../generated-definitions/DownloadExportedAgreementsInCsvResponse.js'
import { InitiateExportAgreementsToCsvResponse } from '../../generated-definitions/InitiateExportAgreementsToCsvResponse.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../../generated-definitions/UsersAgreementsRequest.js'

export class AgreementWithNamespaceAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game account.
   */
  createAgreement(data: UsersAgreementsRequest): Promise<Response<UserAgreementsResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserAgreementsResponseArray,
      'UserAgreementsResponseArray'
    )
  }
  /**
   * This API will return all users who has accepted a specific policy version.
   */
  getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    convertGameUserId?: boolean | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<Response<PagedRetrieveUserAcceptedAgreementResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PagedRetrieveUserAcceptedAgreementResponse,
      'PagedRetrieveUserAcceptedAgreementResponse'
    )
  }
  /**
   * This API will return all accepted Legal Agreements for specified user.
   */
  getAgreementPolicyUser_ByUserId(
    userId: string,
    queryParams?: { excludeOtherNamespacesPolicies?: boolean | null }
  ): Promise<Response<RetrieveAcceptedAgreementResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policies/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveAcceptedAgreementResponseArray,
      'RetrieveAcceptedAgreementResponseArray'
    )
  }
  /**
   * This API will check the status of export process.&lt;br&gt;If the export process has been completed, the response body will include the download url.
   */
  getAgreementsPolicyVersionsUsersExportCsvDownload(queryParams: {
    exportId: string | null
  }): Promise<Response<DownloadExportedAgreementsInCsvResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DownloadExportedAgreementsInCsvResponse,
      'DownloadExportedAgreementsInCsvResponse'
    )
  }
  /**
   * This API will initiate a worker to export list of users who has accepted a specific policy version into a CSV file.&lt;br&gt;To check the export state after initialize it, use `GET /admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download` API.&lt;br/&gt;&lt;br/&gt;This Initiate API is &lt;b&gt;not allow&lt;/b&gt; multiple export worker running for the same namespace, it will return 409 http error if so.&lt;br/&gt;
   */
  createAgreementPolicyVersionUserExportCsvInitiate(queryParams: {
    policyVersionId: string | null
    start: string | null
    end?: string | null
  }): Promise<Response<InitiateExportAgreementsToCsvResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/initiate'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      InitiateExportAgreementsToCsvResponse,
      'InitiateExportAgreementsToCsvResponse'
    )
  }
}
