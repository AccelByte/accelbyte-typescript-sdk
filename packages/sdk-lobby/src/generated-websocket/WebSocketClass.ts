/* eslint-disable camelcase */
/* eslint-disable  no-inner-declarations */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, RefreshToken, SdkSetConfigParam } from '@accelbyte/sdk'
import * as Definitions from './WebSocketDefinitions'

const messageParser = (data: string) => {
  const toVal = (str?: string) => {
    if (str) {
      if (str.startsWith('[') && str.endsWith(']')) {
        return str
          .slice(1, str.length - 1)
          .split(',')
          .filter(v => v !== '')
      }
    }
    return str
  }

  const entries = data
    .split('\n')
    .filter(line => line !== '')
    .map(line => {
      const [key, valStr] = line.split(': ')
      return [key, toVal(valStr)]
    })

  return Object.fromEntries(entries)
}

const messageSerializer = (data: Record<string, any>) => {
  return Object.keys(data)
    .map(key => {
      const toStr = (val: any) => {
        // array
        if (Array.isArray(val)) {
          return `[${String(val)}]`
        }
        // null, undefined
        if (!val) {
          return ''
        }
        return String(val)
      }
      const val = data[key]
      const valStr = toStr(val)

      return `${key}: ${valStr}`
    })
    .join('\n')
}

export function WebSocketClass(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  const baseURL = (args?.coreConfig?.baseURL ?? sdkAssembly.coreConfig.baseURL).replace('http', 'ws')
  const path = '/lobby'
  const url = baseURL + path
  let ws: WebSocket | null = null
  let isDisconnectManually = false
  const allowReconnect = sdkAssembly.webSocketConfig.allowReconnect ?? true
  const maxReconnectAttempts = sdkAssembly.webSocketConfig.maxReconnectAttempts ?? 0
  let reconnectAttempts = maxReconnectAttempts

  const connect = () => {
    const token = sdk.getToken()

    if (!token.accessToken) {
      console.warn('No access token, please login first')
      return
    }

    if (!ws) {
      ws = new WebSocket(url, token.accessToken)
    }
  }

  const refreshToken = async () => {
    const { refreshToken } = sdk.getToken()
    if (refreshToken) {
      const refresh = new RefreshToken({
        config: {
          axiosConfig: sdkAssembly.axiosConfig.request,
          clientId: sdkAssembly.coreConfig.clientId,
          refreshToken
        }
      })
      const result = await refresh.runWithLock()
      if (result) {
        sdk.setToken({
          accessToken: result.access_token,
          refreshToken: result.refresh_token
        })
        return true
      }
    }
    return false
  }

  const handleReconnect = async (ev: CloseEvent) => {
    if (!allowReconnect || isDisconnectManually || !sdk.getToken().accessToken) return
    // token revoked
    if (ev.code === 4020) {
      await refreshToken()
      reconnectAttempts--
      connect()
    } else if (ev.code >= 1001 && ev.code <= 2999) {
      // Only reconnect if codes in range 1001-2999
      if (!ws || ws.readyState !== ws.OPEN) return

      if (maxReconnectAttempts === 0) {
        setTimeout(() => {
          connect()
        }, 1000)
      } else if (reconnectAttempts !== 0) {
        setTimeout(() => {
          reconnectAttempts--
          connect()
        }, 1000)
      }
    }
  }

  const disconnect = (code?: number, reason?: string) => {
    if (ws) {
      ws.close(code, reason)
      isDisconnectManually = true
      ws = null
    }
  }

  const send = (message: Definitions.WebSocketRequest) => {
    if (ws) {
      ws.send(messageSerializer(message))
    }
  }

  const sendRaw = (rawMessage: string) => {
    if (ws) {
      ws.send(rawMessage)
    }
  }

  const onOpen = (cb: () => any) => {
    if (ws) {
      function listener(this: WebSocket, _ev: Event) {
        isDisconnectManually = false
        reconnectAttempts = maxReconnectAttempts
        cb()
      }
      ws.addEventListener('open', listener)
      return {
        removeEventListener: () => ws?.removeEventListener('open', listener)
      }
    }
    return {}
  }

  const onClose = (cb: (ev: CloseEvent) => any) => {
    if (ws) {
      function listener(this: WebSocket, ev: CloseEvent) {
        handleReconnect(ev)
        cb(ev)
      }
      ws.addEventListener('close', listener)
      return {
        removeEventListener: () => ws?.removeEventListener('close', listener)
      }
    }
    return {}
  }

  const onMessage = (cb: (message: Definitions.WebSocketResponseOrNotification | string) => any, raw: boolean = false) => {
    if (ws) {
      function listener(this: WebSocket, ev: MessageEvent<any>) {
        if (raw) {
          cb(ev.data)
        } else {
          const result = Definitions.WebSocketResponseOrNotification.parse(messageParser(ev.data))
          cb(result)
        }
      }
      ws.addEventListener('message', listener)
      return {
        removeEventListener: () => ws?.removeEventListener('message', listener)
      }
    }
    return {}
  }

  const onError = (cb: (err: any) => any) => {
    if (ws) {
      function listener(this: WebSocket, err: any) {
        cb(err)
      }
      ws.addEventListener('error', listener)
      return {
        removeEventListener: () => ws?.removeEventListener('error', listener)
      }
    }
    return {}
  }

  const sendAcceptFriends = (data: Omit<Definitions.AcceptFriendsRequest, 'type'>) => {
    send({ type: 'acceptFriendsRequest', ...data })
  }

  const sendBlockPlayer = (data: Omit<Definitions.BlockPlayerRequest, 'type'>) => {
    send({ type: 'blockPlayerRequest', ...data })
  }

  const sendCancelFriends = (data: Omit<Definitions.CancelFriendsRequest, 'type'>) => {
    send({ type: 'cancelFriendsRequest', ...data })
  }

  const sendCancelMatchmaking = (data: Omit<Definitions.CancelMatchmakingRequest, 'type'>) => {
    send({ type: 'cancelMatchmakingRequest', ...data })
  }

  const sendClientReset = (data: Omit<Definitions.ClientResetRequest, 'type'>) => {
    send({ type: 'clientResetRequest', ...data })
  }

  const sendFriendsStatus = (data: Omit<Definitions.FriendsStatusRequest, 'type'>) => {
    send({ type: 'friendsStatusRequest', ...data })
  }

  const sendGetAllSessionAttribute = (data: Omit<Definitions.GetAllSessionAttributeRequest, 'type'>) => {
    send({ type: 'getAllSessionAttributeRequest', ...data })
  }

  const sendGetFriendshipStatus = (data: Omit<Definitions.GetFriendshipStatusRequest, 'type'>) => {
    send({ type: 'getFriendshipStatusRequest', ...data })
  }

  const sendGetSessionAttribute = (data: Omit<Definitions.GetSessionAttributeRequest, 'type'>) => {
    send({ type: 'getSessionAttributeRequest', ...data })
  }

  const sendJoinDefaultChannel = (data: Omit<Definitions.JoinDefaultChannelRequest, 'type'>) => {
    send({ type: 'joinDefaultChannelRequest', ...data })
  }

  const sendListIncomingFriends = (data: Omit<Definitions.ListIncomingFriendsRequest, 'type'>) => {
    send({ type: 'listIncomingFriendsRequest', ...data })
  }

  const sendListOfFriends = (data: Omit<Definitions.ListOfFriendsRequest, 'type'>) => {
    send({ type: 'listOfFriendsRequest', ...data })
  }

  const sendListOnlineFriends = (data: Omit<Definitions.ListOnlineFriendsRequest, 'type'>) => {
    send({ type: 'listOnlineFriendsRequest', ...data })
  }

  const sendListOutgoingFriends = (data: Omit<Definitions.ListOutgoingFriendsRequest, 'type'>) => {
    send({ type: 'listOutgoingFriendsRequest', ...data })
  }

  const sendOfflineNotification = (data: Omit<Definitions.OfflineNotificationRequest, 'type'>) => {
    send({ type: 'offlineNotificationRequest', ...data })
  }

  const sendPartyChat = (data: Omit<Definitions.PartyChatRequest, 'type'>) => {
    send({ type: 'partyChatRequest', ...data })
  }

  const sendPartyCreate = (data: Omit<Definitions.PartyCreateRequest, 'type'>) => {
    send({ type: 'partyCreateRequest', ...data })
  }

  const sendPartyInfo = (data: Omit<Definitions.PartyInfoRequest, 'type'>) => {
    send({ type: 'partyInfoRequest', ...data })
  }

  const sendPartyInvite = (data: Omit<Definitions.PartyInviteRequest, 'type'>) => {
    send({ type: 'partyInviteRequest', ...data })
  }

  const sendPartyJoin = (data: Omit<Definitions.PartyJoinRequest, 'type'>) => {
    send({ type: 'partyJoinRequest', ...data })
  }

  const sendPartyKick = (data: Omit<Definitions.PartyKickRequest, 'type'>) => {
    send({ type: 'partyKickRequest', ...data })
  }

  const sendPartyLeave = (data: Omit<Definitions.PartyLeaveRequest, 'type'>) => {
    send({ type: 'partyLeaveRequest', ...data })
  }

  const sendPartyPromoteLeader = (data: Omit<Definitions.PartyPromoteLeaderRequest, 'type'>) => {
    send({ type: 'partyPromoteLeaderRequest', ...data })
  }

  const sendPartyReject = (data: Omit<Definitions.PartyRejectRequest, 'type'>) => {
    send({ type: 'partyRejectRequest', ...data })
  }

  const sendPersonalChatHistory = (data: Omit<Definitions.PersonalChatHistoryRequest, 'type'>) => {
    send({ type: 'personalChatHistoryRequest', ...data })
  }

  const sendPersonalChat = (data: Omit<Definitions.PersonalChatRequest, 'type'>) => {
    send({ type: 'personalChatRequest', ...data })
  }

  const sendRefreshToken = (data: Omit<Definitions.RefreshTokenRequest, 'type'>) => {
    send({ type: 'refreshTokenRequest', ...data })
  }

  const sendRejectFriends = (data: Omit<Definitions.RejectFriendsRequest, 'type'>) => {
    send({ type: 'rejectFriendsRequest', ...data })
  }

  const sendRequestFriends = (data: Omit<Definitions.RequestFriendsRequest, 'type'>) => {
    send({ type: 'requestFriendsRequest', ...data })
  }

  const sendSendChannelChat = (data: Omit<Definitions.SendChannelChatRequest, 'type'>) => {
    send({ type: 'sendChannelChatRequest', ...data })
  }

  const sendSetReadyConsent = (data: Omit<Definitions.SetReadyConsentRequest, 'type'>) => {
    send({ type: 'setReadyConsentRequest', ...data })
  }

  const sendSetSessionAttribute = (data: Omit<Definitions.SetSessionAttributeRequest, 'type'>) => {
    send({ type: 'setSessionAttributeRequest', ...data })
  }

  const sendSetUserStatus = (data: Omit<Definitions.SetUserStatusRequest, 'type'>) => {
    send({ type: 'setUserStatusRequest', ...data })
  }

  const sendStartMatchmaking = (data: Omit<Definitions.StartMatchmakingRequest, 'type'>) => {
    send({ type: 'startMatchmakingRequest', ...data })
  }

  const sendUnblockPlayer = (data: Omit<Definitions.UnblockPlayerRequest, 'type'>) => {
    send({ type: 'unblockPlayerRequest', ...data })
  }

  const sendUnfriend = (data: Omit<Definitions.UnfriendRequest, 'type'>) => {
    send({ type: 'unfriendRequest', ...data })
  }

  const sendUserMetric = (data: Omit<Definitions.UserMetricRequest, 'type'>) => {
    send({ type: 'userMetricRequest', ...data })
  }

  return {
    instance: ws,
    connect,
    disconnect,
    send,
    sendRaw,
    onOpen,
    onClose,
    onMessage,
    onError,
    sendAcceptFriends,
    sendBlockPlayer,
    sendCancelFriends,
    sendCancelMatchmaking,
    sendClientReset,
    sendFriendsStatus,
    sendGetAllSessionAttribute,
    sendGetFriendshipStatus,
    sendGetSessionAttribute,
    sendJoinDefaultChannel,
    sendListIncomingFriends,
    sendListOfFriends,
    sendListOnlineFriends,
    sendListOutgoingFriends,
    sendOfflineNotification,
    sendPartyChat,
    sendPartyCreate,
    sendPartyInfo,
    sendPartyInvite,
    sendPartyJoin,
    sendPartyKick,
    sendPartyLeave,
    sendPartyPromoteLeader,
    sendPartyReject,
    sendPersonalChatHistory,
    sendPersonalChat,
    sendRefreshToken,
    sendRejectFriends,
    sendRequestFriends,
    sendSendChannelChat,
    sendSetReadyConsent,
    sendSetSessionAttribute,
    sendSetUserStatus,
    sendStartMatchmaking,
    sendUnblockPlayer,
    sendUnfriend,
    sendUserMetric
  }
}
