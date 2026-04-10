import { capitalize } from '../helpers/utils'
import { Definition, Schema } from './template-ws-defintions'

const definitionToFunctionName = (type: string) => {
  if (type.endsWith('Request')) {
    return 'send' + capitalize(type.slice(0, type.length - 7))
  }
  return type
}

const renderSendFunction = (name: string, definition: Definition) => {
  const functionName = definitionToFunctionName(name)

  return `const ${functionName} = (data: Omit<Definitions.${capitalize(name)}, 'type'>) => {
    send({ type: '${name}', ...data })
  }`
}

export const templateWebsocketClass = (name: string, path: string, definitions: Schema['definitions']) => {
  const requestDefinitions = Object.keys(definitions)
    .filter(key => {
      const val = definitions[key]
      return val['x-type'] == 'request'
    })
    .map(key => [key, definitions[key]] as const)

  return `/* eslint-disable camelcase */
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

  const entries = data.split('\\n')
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
          return \`[\${String(val)}]\`
        }
        // null, undefined
        if (!val) {
          return ''
        }
        return String(val)
      }
      const val = data[key]
      const valStr = toStr(val)

      return \`\${key}: \${valStr}\`
    })
    .join('\\n')
}

export function WebSocketClass(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  const baseURL = (args?.coreConfig?.baseURL ?? sdkAssembly.coreConfig.baseURL).replace('http', 'ws')
  const path = '${path}'
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

  ${requestDefinitions.map(([name, definition]) => renderSendFunction(name, definition)).join(`\n\n  `)}

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
    ${requestDefinitions.map(([name, _]) => definitionToFunctionName(name)).join(',\n    ')}
  }
}

`
}
