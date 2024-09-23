/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ClientCreateRequest } from '../generated-definitions/ClientCreateRequest.js'
import { ClientCreationResponse } from '../generated-definitions/ClientCreationResponse.js'
import { ClientPermissions } from '../generated-definitions/ClientPermissions.js'
import { ClientResponse } from '../generated-definitions/ClientResponse.js'
import { ClientResponseArray } from '../generated-definitions/ClientResponseArray.js'
import { ClientUpdateRequest } from '../generated-definitions/ClientUpdateRequest.js'
import { ClientUpdateSecretRequest } from '../generated-definitions/ClientUpdateSecretRequest.js'
import { Clients$ } from './endpoints/Clients$.js'

export function ClientsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getClients(): Promise<AxiosResponse<ClientResponseArray>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClients()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createClient(data: ClientCreateRequest): Promise<AxiosResponse<ClientCreationResponse>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createClient(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteClient_ByClientId(clientId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClient_ByClientId(clientId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getClient_ByClientId(clientId: string): Promise<AxiosResponse<ClientResponse>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClient_ByClientId(clientId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClient_ByClientId(clientId: string, data: ClientUpdateRequest): Promise<AxiosResponse<ClientResponse>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClient_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSecret_ByClientId(clientId: string, data: ClientUpdateSecretRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSecret_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getClients_ByNS(): Promise<AxiosResponse<ClientResponseArray>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClients_ByNS()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createClient_ByNS(data: ClientCreateRequest): Promise<AxiosResponse<ClientCreationResponse>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createClient_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClientpermission_ByClientId(clientId: string, data: ClientPermissions): Promise<AxiosResponse<unknown>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClientpermission_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteClient_ByClientId_ByNS(clientId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClient_ByClientId_ByNS(clientId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteClientpermission_ByClientId_ByResource_ByAction(
    clientId: string,
    resource: string,
    action: number
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClientpermission_ByClientId_ByResource_ByAction(clientId, resource, action)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClientpermission_ByClientId_ByResource_ByAction(
    clientId: string,
    resource: string,
    action: number
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Clients$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClientpermission_ByClientId_ByResource_ByAction(clientId, resource, action)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
     */
    getClients,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [POST]_**
     */
    createClient,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
     */
    deleteClient_ByClientId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [GET]_**
     */
    getClient_ByClientId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [PATCH]_**
     */
    updateClient_ByClientId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/{clientId}/secret [PUT]_**
     */
    updateSecret_ByClientId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
     */
    getClients_ByNS,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/v3/admin/namespaces/{namespace}/clients [POST]_**
     */
    createClient_ByNS,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [PUT]_**
     */
    updateClientpermission_ByClientId,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
     */
    deleteClient_ByClientId_ByNS,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action} [DELETE]_**
     */
    deleteClientpermission_ByClientId_ByResource_ByAction,
    /**
     * @deprecated
     * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [POST]_**
     */
    updateClientpermission_ByClientId_ByResource_ByAction
  }
}
