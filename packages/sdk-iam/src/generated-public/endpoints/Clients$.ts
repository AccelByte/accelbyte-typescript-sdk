/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ClientCreateRequest } from '../../generated-definitions/ClientCreateRequest.js'
import { ClientCreationResponse } from '../../generated-definitions/ClientCreationResponse.js'
import { ClientPermissions } from '../../generated-definitions/ClientPermissions.js'
import { ClientResponse } from '../../generated-definitions/ClientResponse.js'
import { ClientResponseArray } from '../../generated-definitions/ClientResponseArray.js'
import { ClientUpdateRequest } from '../../generated-definitions/ClientUpdateRequest.js'
import { ClientUpdateSecretRequest } from '../../generated-definitions/ClientUpdateSecretRequest.js'

export class Clients$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
   */
  getClients(): Promise<IResponse<ClientResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientResponseArray, 'ClientResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [POST]_**
   */
  createClient(data: ClientCreateRequest): Promise<IResponse<ClientCreationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientCreationResponse, 'ClientCreationResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
   */
  deleteClient_ByClientId(clientId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [GET]_**
   */
  getClient_ByClientId(clientId: string): Promise<IResponse<ClientResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientResponse, 'ClientResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [PATCH]_**
   */
  updateClient_ByClientId(clientId: string, data: ClientUpdateRequest): Promise<IResponse<ClientResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientResponse, 'ClientResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/{clientId}/secret [PUT]_**
   */
  updateSecret_ByClientId(clientId: string, data: ClientUpdateSecretRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/secret'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
   */
  getClients_ByNS(): Promise<IResponse<ClientResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/namespaces/{namespace}/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientResponseArray, 'ClientResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/v3/admin/namespaces/{namespace}/clients [POST]_**
   */
  createClient_ByNS(data: ClientCreateRequest): Promise<IResponse<ClientCreationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/namespaces/{namespace}/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientCreationResponse, 'ClientCreationResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [PUT]_**
   */
  createClientpermission_ByClientId(clientId: string, data: ClientPermissions): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/clientpermissions'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
   */
  deleteClient_ByClientId_ByNS(clientId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/namespaces/{namespace}/clients/{clientId}'.replace('{namespace}', this.namespace).replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action} [DELETE]_**
   */
  deleteClientpermission_ByClientId_ByResource_ByAction(clientId: string, resource: string, action: number): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/clientpermissions/{resource}/{action}'
      .replace('{clientId}', clientId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [POST]_**
   */
  createClientpermission_ByClientId_ByResource_ByAction(clientId: string, resource: string, action: number): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/clientpermissions/{resource}/{action}'
      .replace('{clientId}', clientId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
