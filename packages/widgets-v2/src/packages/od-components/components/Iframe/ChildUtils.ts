/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import history from 'history'
import { z } from 'zod'

export const MessageType = z.enum(['locationChange', 'heightChange'])

interface LocationChangeMessage {
  messageType: typeof MessageType.enum.locationChange
  data: history.Location<unknown>
}

interface HeightChangeMessage {
  messageType: typeof MessageType.enum.heightChange
  data: number
}

type Message = LocationChangeMessage | HeightChangeMessage

interface SendMessageEvent {
  channel: string
  message: Message
  origin?: string
}

export class ChildUtils {
  static sendMessageToParentWindow({ message, channel, origin = '*' }: SendMessageEvent) {
    const parsedMessage = JSON.stringify({ ...message, channel })

    if (!this.isInIframe()) {
      console.log('Message to parent window ignored: ', { ...message, channel })
      return
    }
    window.parent.postMessage(parsedMessage, origin)
  }

  static isInIframe() {
    try {
      return window.self !== window.top
    } catch (error) {
      return true
    }
  }
}
