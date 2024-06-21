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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ClientCreateRequest } from '../generated-definitions/ClientCreateRequest.js'
import { ClientCreationResponse } from '../generated-definitions/ClientCreationResponse.js'
import { ClientPermissions } from '../generated-definitions/ClientPermissions.js'
import { ClientResponse } from '../generated-definitions/ClientResponse.js'
import { ClientResponseArray } from '../generated-definitions/ClientResponseArray.js'
import { ClientUpdateRequest } from '../generated-definitions/ClientUpdateRequest.js'
import { ClientUpdateSecretRequest } from '../generated-definitions/ClientUpdateSecretRequest.js'
import { Clients$ } from './endpoints/Clients$.js'

export function ClientsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
   */
  async function getClients_DEPRECATED(): Promise<ClientResponseArray> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getClients_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [POST]_**
   */
  async function createClient_DEPRECATED(data: ClientCreateRequest): Promise<ClientCreationResponse> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createClient_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
   */
  async function deleteClient_ByClientId_DEPRECATED(clientId: string): Promise<unknown> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteClient_ByClientId_DEPRECATED(clientId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [GET]_**
   */
  async function getClient_ByClientId_DEPRECATED(clientId: string): Promise<ClientResponse> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getClient_ByClientId_DEPRECATED(clientId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [PATCH]_**
   */
  async function updateClient_ByClientId_DEPRECATED(clientId: string, data: ClientUpdateRequest): Promise<ClientResponse> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateClient_ByClientId_DEPRECATED(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/{clientId}/secret [PUT]_**
   */
  async function updateSecret_ByClientId_DEPRECATED(clientId: string, data: ClientUpdateSecretRequest): Promise<unknown> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateSecret_ByClientId_DEPRECATED(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
   */
  async function getClients_ByNS_DEPRECATED(): Promise<ClientResponseArray> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getClients_ByNS_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/v3/admin/namespaces/{namespace}/clients [POST]_**
   */
  async function createClient_ByNS_DEPRECATED(data: ClientCreateRequest): Promise<ClientCreationResponse> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createClient_ByNS_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [PUT]_**
   */
  async function createClientpermission_ByClientId_DEPRECATED(clientId: string, data: ClientPermissions): Promise<unknown> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createClientpermission_ByClientId_DEPRECATED(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
   */
  async function deleteClient_ByClientId_ByNS_DEPRECATED(clientId: string): Promise<unknown> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteClient_ByClientId_ByNS_DEPRECATED(clientId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action} [DELETE]_**
   */
  async function deleteClientpermission_ByClientId_ByResource_ByAction_DEPRECATED(
    clientId: string,
    resource: string,
    action: number
  ): Promise<unknown> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteClientpermission_ByClientId_ByResource_ByAction_DEPRECATED(clientId, resource, action)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [POST]_**
   */
  async function createClientpermission_ByClientId_ByResource_ByAction_DEPRECATED(
    clientId: string,
    resource: string,
    action: number
  ): Promise<unknown> {
    const $ = new Clients$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createClientpermission_ByClientId_ByResource_ByAction_DEPRECATED(clientId, resource, action)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getClients_DEPRECATED,
    createClient_DEPRECATED,
    deleteClient_ByClientId_DEPRECATED,
    getClient_ByClientId_DEPRECATED,
    updateClient_ByClientId_DEPRECATED,
    updateSecret_ByClientId_DEPRECATED,
    getClients_ByNS_DEPRECATED,
    createClient_ByNS_DEPRECATED,
    createClientpermission_ByClientId_DEPRECATED,
    deleteClient_ByClientId_ByNS_DEPRECATED,
    deleteClientpermission_ByClientId_ByResource_ByAction_DEPRECATED,
    createClientpermission_ByClientId_ByResource_ByAction_DEPRECATED
  }
}
