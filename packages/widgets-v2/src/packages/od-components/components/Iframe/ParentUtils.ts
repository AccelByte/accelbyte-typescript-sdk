/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UrlHelper } from '@accelbyte/sdk'
import { z } from 'zod'
import { MessageType } from './ChildUtils'
import { replaceUrlOnly } from './history'

interface IFrameData {
  iframeId?: string
  iframeChannelId: string
}

interface MessageData<T = any> {
  channel?: string
  data: T
  messageType: string
}

const MessageDataType = {
  [MessageType.enum.locationChange]: z.record(z.string(), z.any()),
  [MessageType.enum.heightChange]: z.number()
}

export class ParentUtils {
  static getMainPath = (pathname: string, separator: string) => {
    return pathname.split(separator).pop() || ''
  }

  static onMessageReceived = (message: MessageEvent, iframeData: IFrameData) => {
    try {
      const messageData = this.getMessageDataOrThrowError(message, iframeData.iframeChannelId)
      this.iframeMessageHandler(messageData, iframeData)
    } catch (error) {
      console.error(`onMessageReceived: The message is ignored`, error)
    }
  }

  static getMessageDataOrThrowError = (message: MessageEvent, iframeChannelId: string): MessageData => {
    try {
      const messageData = JSON.parse(message.data) as MessageData

      if (messageData.channel !== iframeChannelId) {
        throw new Error('Unrecognized source. The channel is not from Odin.')
      }

      if (!MessageDataType[messageData.messageType]) {
        throw new Error('Unrecognized message type.')
      }

      if (!this.validateMessageData(messageData.data, MessageDataType[messageData.messageType])) {
        throw new Error('Unrecognized data type.')
      }

      return messageData
    } catch (err) {
      // message.data is not JSON object
      return message.data
    }
  }

  static validateMessageData<MessageDataType>(data: unknown, codec: z.ZodType<MessageDataType>) {
    const parseResultData = codec.safeParse(data)

    if (!parseResultData) {
      console.error('Not valid')
    }
    return parseResultData
  }

  static iframeMessageHandler = (message: MessageData, iframeData: IFrameData) => {
    switch (message.messageType) {
      case MessageType.enum.locationChange:
        return this.handleLocationChange(message, iframeData)
      case MessageType.enum.heightChange:
        return this.handleHeightChange(message, iframeData)
    }
  }

  static handleLocationChange = (message: MessageData<Location>, iframeData: IFrameData) => {
    const iframeLocation = message.data
    const iframePath = iframeLocation.pathname

    const basePath = `/${iframeData.iframeChannelId}`
    replaceUrlOnly(`/${UrlHelper.combinePaths(basePath, UrlHelper.trimSlashFromStringEdges(iframePath))}${iframeLocation.search}`)
  }

  static handleHeightChange = (message: MessageData<number>, iframeData: IFrameData) => {
    const heightData = message.data
    const iframeHeight = heightData + 256 // Adding Extra Height to add space between iframe & footer
    const iframeElement = document.getElementById(iframeData.iframeChannelId) as HTMLIFrameElement
    if (iframeElement) {
      iframeElement.height = iframeHeight.toString()
    }
  }
}
