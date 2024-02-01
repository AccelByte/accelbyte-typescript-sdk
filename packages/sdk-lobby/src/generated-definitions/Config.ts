/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Config = z.object({
  allowInviteNonConnectedUser: z.boolean().nullish(),
  allowJoinPartyDuringMatchmaking: z.boolean().nullish(),
  autoKickOnDisconnect: z.boolean().nullish(),
  autoKickOnDisconnectDelay: z.number().int().nullish(),
  cancelTicketOnDisconnect: z.boolean().nullish(),
  chatRateLimitBurst: z.number().int().nullish(),
  chatRateLimitDuration: z.number().int().nullish(),
  concurrentUsersLimit: z.number().int().nullish(),
  disableInvitationOnJoinParty: z.boolean().nullish(),
  enableChat: z.boolean().nullish(),
  entitlementCheck: z.boolean().nullish(),
  entitlementItemID: z.string().nullish(),
  generalRateLimitBurst: z.number().int().nullish(),
  generalRateLimitDuration: z.number().int().nullish(),
  keepPresenceActivityOnDisconnect: z.boolean().nullish(),
  maxDSWaitTime: z.number().int(),
  maxFriendsLimit: z.number().int().nullish(),
  maxPartyMember: z.number().int().nullish(),
  namespace: z.string().nullish(),
  profanityFilter: z.boolean().nullish(),
  readyConsentTimeout: z.number().int().nullish(),
  unregisterDelay: z.number().int()
})

export interface Config extends z.TypeOf<typeof Config> {}
