/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ConfigurationTemplateAdminApi } from '../ConfigurationTemplateAdminApi.js'

import { ConfigAlertRequestCreate } from '../../generated-definitions/ConfigAlertRequestCreate.js'
import { ConfigAlertResponse } from '../../generated-definitions/ConfigAlertResponse.js'
import { ConfigurationTemplateResponse } from '../../generated-definitions/ConfigurationTemplateResponse.js'
import { ConfigurationTemplatesResponse } from '../../generated-definitions/ConfigurationTemplatesResponse.js'
import { CreateConfigurationTemplateRequest } from '../../generated-definitions/CreateConfigurationTemplateRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { UpdateConfigurationTemplateRequest } from '../../generated-definitions/UpdateConfigurationTemplateRequest.js'

export enum Key_ConfigurationTemplateAdmin {
  Dsconfigs = 'Session.ConfigurationTemplateAdmin.Dsconfigs',
  Configuration = 'Session.ConfigurationTemplateAdmin.Configuration',
  Configurations = 'Session.ConfigurationTemplateAdmin.Configurations',
  DsconfigsSync = 'Session.ConfigurationTemplateAdmin.DsconfigsSync',
  AlertsConfiguration = 'Session.ConfigurationTemplateAdmin.AlertsConfiguration',
  AlertsConfiguration_ByNS = 'Session.ConfigurationTemplateAdmin.AlertsConfiguration_ByNS',
  Configuration_ByName = 'Session.ConfigurationTemplateAdmin.Configuration_ByName'
}

/**
 * @deprecated
 * Get a dsmc configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.Dsconfigs, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_GetDsconfigs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DsmConfigRecord>) => void
): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationTemplateAdminApi_GetDsconfigs>[1]) => async () => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDsconfigs()
    callback && callback(response)
    return response.data
  }

  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Dsconfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create template configuration to be applied across party and session. Session configuration mandatory : - name - joinability. supported values: - OPEN: user can join or rejoin the session without an invite - CLOSED: once a CLOSED session is created or a session joinability is updated to CLOSED, any change to session members is not allowed and remaining invites will all be canceled. - INVITE_ONLY: to join the session, user whether needs to be invited, or have the code (for join by code). when a user is KICKED/LEFT/REJECTED from this session, they will need to be re-invited to join. - FRIENDS_OF_MEMBERS: only if a user is friend with at least one of the session members, they can join via code. - FRIENDS_OF_LEADER: only if a user is friend with the session leader, they can join via code. - FRIENDS_OF_FRIENDS: only friends of the leader OR friends of friends of the leader can join via code. - autoJoin: when enabled, players will automatically join the initial game session creation. Game session will not send any invite and players dont need to act upon it. default: false (disabled) - Type (example value : P2P, DS, NONE) if type empty, type will be assign to NONE - MinPlayers (must greater or equal 0) - MaxPlayers (must greater than 0) - InviteTimeout (must greater or equal 0) if InviteTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - InactiveTimeout (must greater or equal 0) if InactiveTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - Persistent will only applies to session with type DS (example value true or false, default: false) - If Persistent True the session always active even DS removing or terminate and Session will be request DS again until DS Ready or Busy. - To Stop Session Not request again to DS or want Delete Session can Delete Session using endpoint DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} - If Persistent False the session will be inactive if all member left and DS terminate or removing - nativeSessionSetting: - XboxSessionTemplateName: the XBox session template name that correspondent to the AB session template, and is needed to define XBox session&#39;s joinRestriction and maxMembersCount when doing the session sync. - XboxServiceConfigID: the XBox service configuration ID. - PSNServiceLabel: the PSN service label. - SessionTitle: the session title. In PSN, this will be used to define name of the session thats displayed on PlayStation system UI. - ShouldSync: to define whether the service needs to do session sync with native platform(s). Default: false (disabled). - PSNSupportedPlatforms: the PSN supported platforms. In PSN, if ShouldSync true and PSNSupportedPlatforms is empty, then PS5 will be set as default value. - PSNDisableSystemUIMenu: items whose operation from the PSN system software UI is to be disabled. - PSNBaseUrl this is for base URL PSN if not set will be default value https://s2s.sp-int.playstation.net. In a single namespace only 1 PSN Env that can be used. Multiple session template should refers to the same PSN Env as we have in IAM Service. - https://s2s.sp-int.playstation.net (DEV, need IP Whitelist) - https://s2s.prod-qa.playstation.net (QA Environment/PSN Certification) - https://s2s.np.playstation.net (Production) - localizedSessionName : for localized name and default language example payload : &#34;localizedSessionName&#34;:{ &#34;defaultLanguage&#34; : &#34;en-US&#34; &#34;localizedText&#34; :{ &#34;en-US&#34; : &#34;title&#34; } } - if the game client wants to enable push context to PSN, game client will need to store PSN_PUSH_CONTEXT_ID on the player attributes, otherwise Session service will try to populate from the session attributes or auto generate with random UUID if empty. - TieTeamsSessionLifetime (optional, default: false): If it is set to true, the lifetime of any partyId session inside teams attribute will be tied to the game session. Only applies when the teams partyId is game session. - DisableCodeGeneration (optional, default: false): If it is set to true, code will not be generated for party session automatically. - DSManualSetReady (optional, default: false): The DS need to call specific end point to flag the DS for game session is ready to accept client connection. - EnableSecret (optional, default: false): if configuration template is created with TypeDS and EnableSecret is True, A secret will be created - LeaderElectionGracePeriod this is on second (optional, default:0) this is only use for party session, if value &gt; 0 if leader disconnect will be wait until value reach and leader will be change after reach - ManualRejoin (optional, default: false): indicates if game client will handle manual rejoin upon websocket reconnection when enabled. - DisableResendInvite (optional, default: false): by default, the service will be sending invites until the user reacts to it. enabling this flag will prohibit the service to send reminder invites&#39;. - appName (optional, default: empty string). Extend application name that uploaded to AccelByte extends deployment. The application is for custom/external DS management. - customURLGRPC (optional: default: empty string). Url for grpc server that server custom/external DS management. This value will be ignore when appName is filled. Value formatted as host:port. Example: yourdomain.com:9989 - grpcSessionConfig (optional, default: empty object). Setting for grpc session extends. Session service will calls the grpc when any activity for the game sessions. - appName (required when customURL is empty) The extends app name that created and uploaded to AccelByte extends deployment. - customURL (required when appName is empty) The url for grpc server. Format is host:port. Example: mycustomdomain.com:9889. This will be ignore when appName is filled. - functionFlag (optional, default: -1) Flag to enable which function to calls when any event on the game sessions. The value is bitwise integer. - 0x1 is for created event. Event is sync, anything return from create event will be overide the final game session. - 0x2 is for updated event. Event is async. Called when any update on the game session. - 0x4 is for deleted event. Event is async. Callen when game session got deleted. Example: - value 3: enable for created and updated - value 7: enable for created, updated, and deleted, etc
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.Configuration, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_CreateConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ConfigurationTemplateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: CreateConfigurationTemplateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ConfigurationTemplateResponse) => void
): UseMutationResult<
  ConfigurationTemplateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: CreateConfigurationTemplateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateConfigurationTemplateRequest }) => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration],
    mutationFn,
    ...options
  })
}

/**
 * Get all template configurations in specified namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.Configurations, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_GetConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; name?: string | null; offset?: number; order?: string | null; orderBy?: string | null }
  },
  options?: Omit<UseQueryOptions<ConfigurationTemplatesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigurationTemplatesResponse>) => void
): UseQueryResult<ConfigurationTemplatesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationTemplateAdminApi_GetConfigurations>[1]) => async () => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfigurations(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigurationTemplatesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * sync dsmc configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.DsconfigsSync, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_GetDsconfigsSync = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DsmConfigRecord>) => void
): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationTemplateAdminApi_GetDsconfigsSync>[1]) => async () => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDsconfigsSync()
    callback && callback(response)
    return response.data
  }

  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.DsconfigsSync, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete configuration alert.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_DeleteAlertsConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAlertsConfiguration()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Get a configuration alert.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_GetAlertsConfiguration = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ConfigAlertResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigAlertResponse>) => void
): UseQueryResult<ConfigAlertResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationTemplateAdminApi_GetAlertsConfiguration>[1]) => async () => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAlertsConfiguration()
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigAlertResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create configuration alert configuration alert mandatory : - namespace - durationDays must be greater than 0
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_UpdateAlertsConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }>,
    'mutationKey'
  >,
  callback?: (data: ConfigAlertResponse) => void
): UseMutationResult<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigAlertRequestCreate }) => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAlertsConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Update configuration alert configuration alert mandatory : - namespace - durationDays must be greater than 0
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration_ByNS, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_UpdateAlertsConfiguration_ByNSMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }>,
    'mutationKey'
  >,
  callback?: (data: ConfigAlertResponse) => void
): UseMutationResult<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigAlertRequestCreate }) => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAlertsConfiguration_ByNS(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration_ByNS],
    mutationFn,
    ...options
  })
}

/**
 * Delete a template configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_DeleteConfiguration_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string }) => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteConfiguration_ByName(input.name)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName],
    mutationFn,
    ...options
  })
}

/**
 * Get a template configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_GetConfiguration_ByName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { name: string },
  options?: Omit<UseQueryOptions<ConfigurationTemplateResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigurationTemplateResponse>) => void
): UseQueryResult<ConfigurationTemplateResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationTemplateAdminApi_GetConfiguration_ByName>[1]) => async () => {
      const response = await ConfigurationTemplateAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getConfiguration_ByName(input.name)
      callback && callback(response)
      return response.data
    }

  return useQuery<ConfigurationTemplateResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Modify template configuration Session configuration mandatory : - name - joinability. supported values: - OPEN: user can join or rejoin the session without an invite - CLOSED: once a CLOSED session is created or a session joinability is updated to CLOSED, any change to session members is not allowed and remaining invites will all be canceled. - INVITE_ONLY: to join the session, user whether needs to be invited, or have the code (for join by code). when a user is KICKED/LEFT/REJECTED from this session, they will need to be re-invited to join. - FRIENDS_OF_MEMBERS: only if a user is friend with at least one of the session members, they can join via code. - FRIENDS_OF_LEADER: only if a user is friend with the session leader, they can join via code. - FRIENDS_OF_FRIENDS: only friends of the leader OR friends of friends of the leader can join via code. - autoJoin: when enabled, players will automatically join the initial game session creation. Game session will not send any invite and players dont need to act upon it. default: false (disabled) - Type (example value : P2P, DS, NONE) if type empty, type will be assign to NONE - MinPlayers (must greater or equal 0) - MaxPlayers (must greater than 0) - InviteTimeout (must greater or equal 0) if InviteTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - InactiveTimeout (must greater or equal 0) if InactiveTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - Persistent Flag only can use with type DS (example value true or false) - If Persistent True the session always active even DS removing or terminate and Session will be request DS again until DS Ready or Busy. - To Stop Session Not request again to DS or want Delete Session can Delete Session using endpoint DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} - If Persistent False the session will be inactive if all member left and DS terminate or removing - nativeSessionSetting: - XboxSessionTemplateName: the XBox session template name that correspondent to the AB session template, and is needed to define XBox session&#39;s joinRestriction and maxMembersCount when doing the session sync. - XboxServiceConfigID: the XBox service configuration ID. - PSNServiceLabel: the PSN service label. - SessionTitle: the session title. In PSN, this will be used to define name of the session thats displayed on PlayStation system UI. - ShouldSync: to define whether the service needs to do session sync with native platform(s). Default: false (disabled). - PSNSupportedPlatforms: the PSN supported platforms. In PSN, if ShouldSync true and PSNSupportedPlatforms is empty, then PS5 will be set as default value. - PSNDisableSystemUIMenu: items whose operation from the PSN system software UI is to be disabled. - PSNBaseUrl this is for base URL PSN if not set will be default value https://s2s.sp-int.playstation.net. In a single namespace only 1 PSN Env that can be used. Multiple session template should refers to the same PSN Env as we have in IAM Service. - https://s2s.sp-int.playstation.net (DEV, need IP Whitelist) - https://s2s.prod-qa.playstation.net (QA Environment/PSN Certification) - https://s2s.np.playstation.net (Production) - localizedSessionName : for localized name and default language example payload : &#34;localizedSessionName&#34;:{ &#34;defaultLanguage&#34; : &#34;en-US&#34; &#34;localizedText&#34; :{ &#34;en-US&#34; : &#34;title&#34; } } - if the game client wants to enable push context to PSN, game client will need to store PSN_PUSH_CONTEXT_ID on the player attributes, otherwise Session service will try to populate from the session attributes or auto generate with random UUID if empty. - TieTeamsSessionLifetime: If it is set to true, the lifetime of any partyId session inside teams attribute will be tied to the game session. Only applies when the teams partyId is game session. - DisableCodeGeneration (optional, default: false): If it is set to true, code will not be generated for party session automatically. - DSManualSetReady (optional, default: false): The DS need to call specific end point to flag the DS for game session is ready to accept client connection. - EnableSecret (optional, default: false): if configuration template is created with TypeDS and EnableSecret is True, A secret will be created. - ManualRejoin (optional, default: false): indicates if game client will handle manual rejoin upon websocket reconnection when enabled. - DisableResendInvite (optional, default: false): by default, the service will be sending invites until the user reacts to it. enabling this flag will prohibit the service to send reminder invites&#39;. - appName (optional, default: empty string). Extend application name that uploaded to AccelByte extends deployment. The application is for custom/external DS management. - customURLGRPC (optional: default: empty string). Url for grpc server that server custom/external DS management. This value will be ignore when appName is filled. Value formatted as host:port. Example: yourdomain.com:9989 - grpcSessionConfig (optional, default: empty object). Setting for grpc session extends. Session service will calls the grpc when any activity for the game sessions. - appName (required when customURL is empty) The extends app name that created and uploaded to AccelByte extends deployment. - customURL (required when appName is empty) The url for grpc server. Format is host:port. Example: mycustomdomain.com:9889. This will be ignore when appName is filled. - functionFlag (optional, default: -1) Flag to enable which function to calls when any event on the game sessions. The value is bitwise integer. - 0x1 is for created event. Event is sync, anything return from create event will be overide the final game session. - 0x2 is for updated event. Event is async. Called when any update on the game session. - 0x4 is for deleted event. Event is async. Callen when game session got deleted. Example: - value 3: enable for created and updated - value 7: enable for created, updated, and deleted, etc
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName, input]
 * }
 * ```
 */
export const useConfigurationTemplateAdminApi_UpdateConfiguration_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ConfigurationTemplateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { name: string; data: UpdateConfigurationTemplateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ConfigurationTemplateResponse) => void
): UseMutationResult<
  ConfigurationTemplateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { name: string; data: UpdateConfigurationTemplateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: UpdateConfigurationTemplateRequest }) => {
    const response = await ConfigurationTemplateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConfiguration_ByName(input.name, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName],
    mutationFn,
    ...options
  })
}
