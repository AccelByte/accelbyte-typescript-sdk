/**
 * AUTO GENERATED
 */

import { z } from 'zod'

export const AcceptFriendsNotif = z.object({
  type: z.literal('acceptFriendsNotif'),
  friendId: z.coerce.string()
})

export type AcceptFriendsNotif = z.infer<typeof AcceptFriendsNotif>

export const AcceptFriendsRequest = z.object({
  type: z.literal('acceptFriendsRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type AcceptFriendsRequest = z.infer<typeof AcceptFriendsRequest>

export const AcceptFriendsResponse = z.object({
  type: z.literal('acceptFriendsResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type AcceptFriendsResponse = z.infer<typeof AcceptFriendsResponse>

export const BlockPlayerNotif = z.object({
  type: z.literal('blockPlayerNotif'),
  blockedUserId: z.coerce.string(),
  userId: z.coerce.string()
})

export type BlockPlayerNotif = z.infer<typeof BlockPlayerNotif>

export const BlockPlayerRequest = z.object({
  type: z.literal('blockPlayerRequest'),
  blockUserId: z.coerce.string(),
  id: z.coerce.string(),
  namespace: z.coerce.string()
})

export type BlockPlayerRequest = z.infer<typeof BlockPlayerRequest>

export const BlockPlayerResponse = z.object({
  type: z.literal('blockPlayerResponse'),
  blockUserId: z.coerce.string(),
  code: z.coerce.number(),
  id: z.coerce.string(),
  namespace: z.coerce.string()
})

export type BlockPlayerResponse = z.infer<typeof BlockPlayerResponse>

export const CancelFriendsNotif = z.object({
  type: z.literal('cancelFriendsNotif'),
  userId: z.coerce.string()
})

export type CancelFriendsNotif = z.infer<typeof CancelFriendsNotif>

export const CancelFriendsRequest = z.object({
  type: z.literal('cancelFriendsRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type CancelFriendsRequest = z.infer<typeof CancelFriendsRequest>

export const CancelFriendsResponse = z.object({
  type: z.literal('cancelFriendsResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type CancelFriendsResponse = z.infer<typeof CancelFriendsResponse>

export const CancelMatchmakingRequest = z.object({
  type: z.literal('cancelMatchmakingRequest'),
  gameMode: z.coerce.string(),
  id: z.coerce.string(),
  isTempParty: z.boolean()
})

export type CancelMatchmakingRequest = z.infer<typeof CancelMatchmakingRequest>

export const CancelMatchmakingResponse = z.object({
  type: z.literal('cancelMatchmakingResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type CancelMatchmakingResponse = z.infer<typeof CancelMatchmakingResponse>

export const ChannelChatNotif = z.object({
  type: z.literal('channelChatNotif'),
  channelSlug: z.coerce.string(),
  from: z.coerce.string(),
  payload: z.coerce.string(),
  sentAt: z.coerce.string()
})

export type ChannelChatNotif = z.infer<typeof ChannelChatNotif>

export const ClientResetRequest = z.object({
  type: z.literal('clientResetRequest'),
  namespace: z.coerce.string(),
  userId: z.coerce.string()
})

export type ClientResetRequest = z.infer<typeof ClientResetRequest>

export const ConnectNotif = z.object({
  type: z.literal('connectNotif'),
  lobbySessionID: z.coerce.string()
})

export type ConnectNotif = z.infer<typeof ConnectNotif>

export const DisconnectNotif = z.object({
  type: z.literal('disconnectNotif'),
  connectionId: z.coerce.string(),
  namespace: z.coerce.string()
})

export type DisconnectNotif = z.infer<typeof DisconnectNotif>

export const DsNotif = z.object({
  type: z.literal('dsNotif'),
  alternateIps: z.array(z.coerce.string()),
  customAttribute: z.coerce.string(),
  deployment: z.coerce.string(),
  gameVersion: z.coerce.string(),
  imageVersion: z.coerce.string(),
  ip: z.coerce.string(),
  isOK: z.boolean(),
  isOverrideGameVersion: z.boolean(),
  lastUpdate: z.coerce.string(),
  matchId: z.coerce.string(),
  message: z.coerce.string(),
  namespace: z.coerce.string(),
  podName: z.coerce.string(),
  port: z.coerce.number(),
  ports: z.any(),
  protocol: z.coerce.string(),
  provider: z.coerce.string(),
  region: z.coerce.string(),
  sessionId: z.coerce.string(),
  status: z.coerce.string()
})

export type DsNotif = z.infer<typeof DsNotif>

export const ErrorNotif = z.object({
  type: z.literal('errorNotif'),
  message: z.coerce.string()
})

export type ErrorNotif = z.infer<typeof ErrorNotif>

export const ExitAllChannel = z.object({
  type: z.literal('exitAllChannel'),
  namespace: z.coerce.string(),
  userId: z.coerce.string()
})

export type ExitAllChannel = z.infer<typeof ExitAllChannel>

export const FriendsStatusRequest = z.object({
  type: z.literal('friendsStatusRequest'),
  id: z.coerce.string()
})

export type FriendsStatusRequest = z.infer<typeof FriendsStatusRequest>

export const FriendsStatusResponse = z.object({
  type: z.literal('friendsStatusResponse'),
  activity: z.array(z.coerce.string()),
  availability: z.array(z.coerce.string()),
  code: z.coerce.number(),
  friendIds: z.array(z.coerce.string()),
  id: z.coerce.string(),
  lastSeenAt: z.array(z.coerce.string())
})

export type FriendsStatusResponse = z.infer<typeof FriendsStatusResponse>

export const GetAllSessionAttributeRequest = z.object({
  type: z.literal('getAllSessionAttributeRequest'),
  id: z.coerce.string()
})

export type GetAllSessionAttributeRequest = z.infer<typeof GetAllSessionAttributeRequest>

export const GetAllSessionAttributeResponse = z.object({
  type: z.literal('getAllSessionAttributeResponse'),
  attributes: z.any(),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type GetAllSessionAttributeResponse = z.infer<typeof GetAllSessionAttributeResponse>

export const GetFriendshipStatusRequest = z.object({
  type: z.literal('getFriendshipStatusRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type GetFriendshipStatusRequest = z.infer<typeof GetFriendshipStatusRequest>

export const GetFriendshipStatusResponse = z.object({
  type: z.literal('getFriendshipStatusResponse'),
  code: z.coerce.number(),
  friendshipStatus: z.coerce.string(),
  id: z.coerce.string()
})

export type GetFriendshipStatusResponse = z.infer<typeof GetFriendshipStatusResponse>

export const GetSessionAttributeRequest = z.object({
  type: z.literal('getSessionAttributeRequest'),
  id: z.coerce.string(),
  key: z.coerce.string()
})

export type GetSessionAttributeRequest = z.infer<typeof GetSessionAttributeRequest>

export const GetSessionAttributeResponse = z.object({
  type: z.literal('getSessionAttributeResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  value: z.coerce.string()
})

export type GetSessionAttributeResponse = z.infer<typeof GetSessionAttributeResponse>

export const JoinDefaultChannelRequest = z.object({
  type: z.literal('joinDefaultChannelRequest'),
  id: z.coerce.string()
})

export type JoinDefaultChannelRequest = z.infer<typeof JoinDefaultChannelRequest>

export const JoinDefaultChannelResponse = z.object({
  type: z.literal('joinDefaultChannelResponse'),
  channelSlug: z.coerce.string(),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type JoinDefaultChannelResponse = z.infer<typeof JoinDefaultChannelResponse>

export const ListIncomingFriendsRequest = z.object({
  type: z.literal('listIncomingFriendsRequest'),
  id: z.coerce.string()
})

export type ListIncomingFriendsRequest = z.infer<typeof ListIncomingFriendsRequest>

export const ListIncomingFriendsResponse = z.object({
  type: z.literal('listIncomingFriendsResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  userIds: z.array(z.coerce.string())
})

export type ListIncomingFriendsResponse = z.infer<typeof ListIncomingFriendsResponse>

export const ListOfFriendsRequest = z.object({
  type: z.literal('listOfFriendsRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type ListOfFriendsRequest = z.infer<typeof ListOfFriendsRequest>

export const ListOfFriendsResponse = z.object({
  type: z.literal('listOfFriendsResponse'),
  code: z.coerce.number(),
  friendIds: z.array(z.coerce.string()),
  id: z.coerce.string()
})

export type ListOfFriendsResponse = z.infer<typeof ListOfFriendsResponse>

export const ListOnlineFriendsRequest = z.object({
  type: z.literal('listOnlineFriendsRequest'),
  id: z.coerce.string()
})

export type ListOnlineFriendsRequest = z.infer<typeof ListOnlineFriendsRequest>

export const ListOutgoingFriendsRequest = z.object({
  type: z.literal('listOutgoingFriendsRequest'),
  id: z.coerce.string()
})

export type ListOutgoingFriendsRequest = z.infer<typeof ListOutgoingFriendsRequest>

export const ListOutgoingFriendsResponse = z.object({
  type: z.literal('listOutgoingFriendsResponse'),
  code: z.coerce.number(),
  friendIds: z.array(z.coerce.string()),
  id: z.coerce.string()
})

export type ListOutgoingFriendsResponse = z.infer<typeof ListOutgoingFriendsResponse>

export const MatchmakingNotif = z.object({
  type: z.literal('matchmakingNotif'),
  counterPartyMember: z.array(z.coerce.string()),
  matchId: z.coerce.string(),
  message: z.coerce.string(),
  partyMember: z.array(z.coerce.string()),
  readyDuration: z.coerce.number(),
  status: z.coerce.string()
})

export type MatchmakingNotif = z.infer<typeof MatchmakingNotif>

export const MessageNotif = z.object({
  type: z.literal('messageNotif'),
  from: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string(),
  sentAt: z.coerce.string(),
  to: z.coerce.string(),
  topic: z.coerce.string()
})

export type MessageNotif = z.infer<typeof MessageNotif>

export const MessageSessionNotif = z.object({
  type: z.literal('messageSessionNotif'),
  from: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string(),
  sentAt: z.coerce.string(),
  to: z.coerce.string(),
  topic: z.coerce.string()
})

export type MessageSessionNotif = z.infer<typeof MessageSessionNotif>

export const OfflineNotificationRequest = z.object({
  type: z.literal('offlineNotificationRequest'),
  id: z.coerce.string()
})

export type OfflineNotificationRequest = z.infer<typeof OfflineNotificationRequest>

export const OfflineNotificationResponse = z.object({
  type: z.literal('offlineNotificationResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type OfflineNotificationResponse = z.infer<typeof OfflineNotificationResponse>

export const OnlineFriends = z.object({
  type: z.literal('onlineFriends'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  onlineFriendIds: z.array(z.coerce.string())
})

export type OnlineFriends = z.infer<typeof OnlineFriends>

export const PartyChatNotif = z.object({
  type: z.literal('partyChatNotif'),
  from: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string(),
  receivedAt: z.coerce.string(),
  to: z.coerce.string()
})

export type PartyChatNotif = z.infer<typeof PartyChatNotif>

export const PartyChatRequest = z.object({
  type: z.literal('partyChatRequest'),
  from: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string(),
  receivedAt: z.coerce.string(),
  to: z.coerce.string()
})

export type PartyChatRequest = z.infer<typeof PartyChatRequest>

export const PartyChatResponse = z.object({
  type: z.literal('partyChatResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type PartyChatResponse = z.infer<typeof PartyChatResponse>

export const PartyCreateRequest = z.object({
  type: z.literal('partyCreateRequest'),
  id: z.coerce.string()
})

export type PartyCreateRequest = z.infer<typeof PartyCreateRequest>

export const PartyCreateResponse = z.object({
  type: z.literal('partyCreateResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  invitationToken: z.coerce.string(),
  invitees: z.coerce.string(),
  leaderId: z.coerce.string(),
  members: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyCreateResponse = z.infer<typeof PartyCreateResponse>

export const PartyDataUpdateNotif = z.object({
  type: z.literal('partyDataUpdateNotif'),
  customAttributes: z.any(),
  invitees: z.array(z.coerce.string()),
  leader: z.coerce.string(),
  members: z.array(z.coerce.string()),
  namespace: z.coerce.string(),
  partyId: z.coerce.string(),
  updatedAt: z.coerce.string()
})

export type PartyDataUpdateNotif = z.infer<typeof PartyDataUpdateNotif>

export const PartyGetInvitedNotif = z.object({
  type: z.literal('partyGetInvitedNotif'),
  from: z.coerce.string(),
  invitationToken: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyGetInvitedNotif = z.infer<typeof PartyGetInvitedNotif>

export const PartyInfoRequest = z.object({
  type: z.literal('partyInfoRequest'),
  id: z.coerce.string()
})

export type PartyInfoRequest = z.infer<typeof PartyInfoRequest>

export const PartyInfoResponse = z.object({
  type: z.literal('partyInfoResponse'),
  code: z.coerce.number(),
  customAttributes: z.any(),
  id: z.coerce.string(),
  invitationToken: z.coerce.string(),
  invitees: z.coerce.string(),
  leaderId: z.coerce.string(),
  members: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyInfoResponse = z.infer<typeof PartyInfoResponse>

export const PartyInviteNotif = z.object({
  type: z.literal('partyInviteNotif'),
  inviteeId: z.coerce.string(),
  inviterId: z.coerce.string()
})

export type PartyInviteNotif = z.infer<typeof PartyInviteNotif>

export const PartyInviteRequest = z.object({
  type: z.literal('partyInviteRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type PartyInviteRequest = z.infer<typeof PartyInviteRequest>

export const PartyInviteResponse = z.object({
  type: z.literal('partyInviteResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type PartyInviteResponse = z.infer<typeof PartyInviteResponse>

export const PartyJoinNotif = z.object({
  type: z.literal('partyJoinNotif'),
  userId: z.coerce.string()
})

export type PartyJoinNotif = z.infer<typeof PartyJoinNotif>

export const PartyJoinRequest = z.object({
  type: z.literal('partyJoinRequest'),
  id: z.coerce.string(),
  invitationToken: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyJoinRequest = z.infer<typeof PartyJoinRequest>

export const PartyJoinResponse = z.object({
  type: z.literal('partyJoinResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  invitationToken: z.coerce.string(),
  invitees: z.coerce.string(),
  leaderId: z.coerce.string(),
  members: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyJoinResponse = z.infer<typeof PartyJoinResponse>

export const PartyKickNotif = z.object({
  type: z.literal('partyKickNotif'),
  leaderId: z.coerce.string(),
  partyId: z.coerce.string(),
  userId: z.coerce.string()
})

export type PartyKickNotif = z.infer<typeof PartyKickNotif>

export const PartyKickRequest = z.object({
  type: z.literal('partyKickRequest'),
  id: z.coerce.string(),
  memberId: z.coerce.string()
})

export type PartyKickRequest = z.infer<typeof PartyKickRequest>

export const PartyKickResponse = z.object({
  type: z.literal('partyKickResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type PartyKickResponse = z.infer<typeof PartyKickResponse>

export const PartyLeaveNotif = z.object({
  type: z.literal('partyLeaveNotif'),
  leaderId: z.coerce.string(),
  userId: z.coerce.string()
})

export type PartyLeaveNotif = z.infer<typeof PartyLeaveNotif>

export const PartyLeaveRequest = z.object({
  type: z.literal('partyLeaveRequest'),
  id: z.coerce.string(),
  ignoreUserRegistry: z.boolean()
})

export type PartyLeaveRequest = z.infer<typeof PartyLeaveRequest>

export const PartyLeaveResponse = z.object({
  type: z.literal('partyLeaveResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type PartyLeaveResponse = z.infer<typeof PartyLeaveResponse>

export const PartyPromoteLeaderRequest = z.object({
  type: z.literal('partyPromoteLeaderRequest'),
  id: z.coerce.string(),
  newLeaderUserId: z.coerce.string()
})

export type PartyPromoteLeaderRequest = z.infer<typeof PartyPromoteLeaderRequest>

export const PartyPromoteLeaderResponse = z.object({
  type: z.literal('partyPromoteLeaderResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  invitationToken: z.coerce.string(),
  invitees: z.coerce.string(),
  leaderId: z.coerce.string(),
  members: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyPromoteLeaderResponse = z.infer<typeof PartyPromoteLeaderResponse>

export const PartyRejectNotif = z.object({
  type: z.literal('partyRejectNotif'),
  leaderId: z.coerce.string(),
  partyId: z.coerce.string(),
  userId: z.coerce.string()
})

export type PartyRejectNotif = z.infer<typeof PartyRejectNotif>

export const PartyRejectRequest = z.object({
  type: z.literal('partyRejectRequest'),
  id: z.coerce.string(),
  invitationToken: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyRejectRequest = z.infer<typeof PartyRejectRequest>

export const PartyRejectResponse = z.object({
  type: z.literal('partyRejectResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  partyId: z.coerce.string()
})

export type PartyRejectResponse = z.infer<typeof PartyRejectResponse>

export const PersonalChatHistoryRequest = z.object({
  type: z.literal('personalChatHistoryRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type PersonalChatHistoryRequest = z.infer<typeof PersonalChatHistoryRequest>

export const PersonalChatHistoryResponse = z.object({
  type: z.literal('personalChatHistoryResponse'),
  chat: z.coerce.string(),
  code: z.coerce.number(),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type PersonalChatHistoryResponse = z.infer<typeof PersonalChatHistoryResponse>

export const PersonalChatNotif = z.object({
  type: z.literal('personalChatNotif'),
  from: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string(),
  receivedAt: z.coerce.string(),
  to: z.coerce.string()
})

export type PersonalChatNotif = z.infer<typeof PersonalChatNotif>

export const PersonalChatRequest = z.object({
  type: z.literal('personalChatRequest'),
  from: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string(),
  receivedAt: z.coerce.string(),
  to: z.coerce.string()
})

export type PersonalChatRequest = z.infer<typeof PersonalChatRequest>

export const PersonalChatResponse = z.object({
  type: z.literal('personalChatResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type PersonalChatResponse = z.infer<typeof PersonalChatResponse>

export const RefreshTokenRequest = z.object({
  type: z.literal('refreshTokenRequest'),
  id: z.coerce.string(),
  token: z.coerce.string()
})

export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequest>

export const RefreshTokenResponse = z.object({
  type: z.literal('refreshTokenResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type RefreshTokenResponse = z.infer<typeof RefreshTokenResponse>

export const RejectFriendsNotif = z.object({
  type: z.literal('rejectFriendsNotif'),
  userId: z.coerce.string()
})

export type RejectFriendsNotif = z.infer<typeof RejectFriendsNotif>

export const RejectFriendsRequest = z.object({
  type: z.literal('rejectFriendsRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type RejectFriendsRequest = z.infer<typeof RejectFriendsRequest>

export const RejectFriendsResponse = z.object({
  type: z.literal('rejectFriendsResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type RejectFriendsResponse = z.infer<typeof RejectFriendsResponse>

export const RematchmakingNotif = z.object({
  type: z.literal('rematchmakingNotif'),
  banDuration: z.coerce.number()
})

export type RematchmakingNotif = z.infer<typeof RematchmakingNotif>

export const RequestFriendsNotif = z.object({
  type: z.literal('requestFriendsNotif'),
  friendId: z.coerce.string()
})

export type RequestFriendsNotif = z.infer<typeof RequestFriendsNotif>

export const RequestFriendsRequest = z.object({
  type: z.literal('requestFriendsRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type RequestFriendsRequest = z.infer<typeof RequestFriendsRequest>

export const RequestFriendsResponse = z.object({
  type: z.literal('requestFriendsResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type RequestFriendsResponse = z.infer<typeof RequestFriendsResponse>

export const SendChannelChatRequest = z.object({
  type: z.literal('sendChannelChatRequest'),
  channelSlug: z.coerce.string(),
  id: z.coerce.string(),
  payload: z.coerce.string()
})

export type SendChannelChatRequest = z.infer<typeof SendChannelChatRequest>

export const SendChannelChatResponse = z.object({
  type: z.literal('sendChannelChatResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type SendChannelChatResponse = z.infer<typeof SendChannelChatResponse>

export const SetReadyConsentNotif = z.object({
  type: z.literal('setReadyConsentNotif'),
  matchId: z.coerce.string(),
  userId: z.coerce.string()
})

export type SetReadyConsentNotif = z.infer<typeof SetReadyConsentNotif>

export const SetReadyConsentRequest = z.object({
  type: z.literal('setReadyConsentRequest'),
  id: z.coerce.string(),
  matchId: z.coerce.string()
})

export type SetReadyConsentRequest = z.infer<typeof SetReadyConsentRequest>

export const SetReadyConsentResponse = z.object({
  type: z.literal('setReadyConsentResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type SetReadyConsentResponse = z.infer<typeof SetReadyConsentResponse>

export const SetSessionAttributeRequest = z.object({
  type: z.literal('setSessionAttributeRequest'),
  id: z.coerce.string(),
  key: z.coerce.string(),
  namespace: z.coerce.string(),
  value: z.coerce.string()
})

export type SetSessionAttributeRequest = z.infer<typeof SetSessionAttributeRequest>

export const SetSessionAttributeResponse = z.object({
  type: z.literal('setSessionAttributeResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type SetSessionAttributeResponse = z.infer<typeof SetSessionAttributeResponse>

export const SetUserStatusRequest = z.object({
  type: z.literal('setUserStatusRequest'),
  activity: z.coerce.string(),
  availability: z.coerce.number(),
  id: z.coerce.string()
})

export type SetUserStatusRequest = z.infer<typeof SetUserStatusRequest>

export const SetUserStatusResponse = z.object({
  type: z.literal('setUserStatusResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type SetUserStatusResponse = z.infer<typeof SetUserStatusResponse>

export const ShutdownNotif = z.object({
  type: z.literal('shutdownNotif'),
  message: z.coerce.string()
})

export type ShutdownNotif = z.infer<typeof ShutdownNotif>

export const SignalingP2PNotif = z.object({
  type: z.literal('signalingP2PNotif'),
  destinationId: z.coerce.string(),
  message: z.coerce.string()
})

export type SignalingP2PNotif = z.infer<typeof SignalingP2PNotif>

export const StartMatchmakingRequest = z.object({
  type: z.literal('startMatchmakingRequest'),
  extraAttributes: z.coerce.string(),
  gameMode: z.coerce.string(),
  id: z.coerce.string(),
  partyAttributes: z.any(),
  priority: z.coerce.number(),
  tempParty: z.coerce.string()
})

export type StartMatchmakingRequest = z.infer<typeof StartMatchmakingRequest>

export const StartMatchmakingResponse = z.object({
  type: z.literal('startMatchmakingResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type StartMatchmakingResponse = z.infer<typeof StartMatchmakingResponse>

export const UnblockPlayerNotif = z.object({
  type: z.literal('unblockPlayerNotif'),
  unblockedUserId: z.coerce.string(),
  userId: z.coerce.string()
})

export type UnblockPlayerNotif = z.infer<typeof UnblockPlayerNotif>

export const UnblockPlayerRequest = z.object({
  type: z.literal('unblockPlayerRequest'),
  id: z.coerce.string(),
  namespace: z.coerce.string(),
  unblockedUserId: z.coerce.string()
})

export type UnblockPlayerRequest = z.infer<typeof UnblockPlayerRequest>

export const UnblockPlayerResponse = z.object({
  type: z.literal('unblockPlayerResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  namespace: z.coerce.string(),
  unblockedUserId: z.coerce.string()
})

export type UnblockPlayerResponse = z.infer<typeof UnblockPlayerResponse>

export const UnfriendNotif = z.object({
  type: z.literal('unfriendNotif'),
  friendId: z.coerce.string()
})

export type UnfriendNotif = z.infer<typeof UnfriendNotif>

export const UnfriendRequest = z.object({
  type: z.literal('unfriendRequest'),
  friendId: z.coerce.string(),
  id: z.coerce.string()
})

export type UnfriendRequest = z.infer<typeof UnfriendRequest>

export const UnfriendResponse = z.object({
  type: z.literal('unfriendResponse'),
  code: z.coerce.number(),
  id: z.coerce.string()
})

export type UnfriendResponse = z.infer<typeof UnfriendResponse>

export const UserMetricRequest = z.object({
  type: z.literal('userMetricRequest'),
  id: z.coerce.string()
})

export type UserMetricRequest = z.infer<typeof UserMetricRequest>

export const UserMetricResponse = z.object({
  type: z.literal('userMetricResponse'),
  code: z.coerce.number(),
  id: z.coerce.string(),
  playerCount: z.coerce.number()
})

export type UserMetricResponse = z.infer<typeof UserMetricResponse>

export const UserStatusNotif = z.object({
  type: z.literal('userStatusNotif'),
  activity: z.coerce.string(),
  availability: z.coerce.number(),
  lastSeenAt: z.coerce.string(),
  userId: z.coerce.string()
})

export type UserStatusNotif = z.infer<typeof UserStatusNotif>

export const WebSocketRequest = z.discriminatedUnion('type', [
  AcceptFriendsRequest,
  BlockPlayerRequest,
  CancelFriendsRequest,
  CancelMatchmakingRequest,
  ClientResetRequest,
  FriendsStatusRequest,
  GetAllSessionAttributeRequest,
  GetFriendshipStatusRequest,
  GetSessionAttributeRequest,
  JoinDefaultChannelRequest,
  ListIncomingFriendsRequest,
  ListOfFriendsRequest,
  ListOnlineFriendsRequest,
  ListOutgoingFriendsRequest,
  OfflineNotificationRequest,
  PartyChatRequest,
  PartyCreateRequest,
  PartyInfoRequest,
  PartyInviteRequest,
  PartyJoinRequest,
  PartyKickRequest,
  PartyLeaveRequest,
  PartyPromoteLeaderRequest,
  PartyRejectRequest,
  PersonalChatHistoryRequest,
  PersonalChatRequest,
  RefreshTokenRequest,
  RejectFriendsRequest,
  RequestFriendsRequest,
  SendChannelChatRequest,
  SetReadyConsentRequest,
  SetSessionAttributeRequest,
  SetUserStatusRequest,
  StartMatchmakingRequest,
  UnblockPlayerRequest,
  UnfriendRequest,
  UserMetricRequest
])

export type WebSocketRequest = z.infer<typeof WebSocketRequest>

export const WebSocketResponseOrNotification = z.discriminatedUnion('type', [
  AcceptFriendsNotif,
  AcceptFriendsResponse,
  BlockPlayerNotif,
  BlockPlayerResponse,
  CancelFriendsNotif,
  CancelFriendsResponse,
  CancelMatchmakingResponse,
  ChannelChatNotif,
  ConnectNotif,
  DisconnectNotif,
  DsNotif,
  ErrorNotif,
  FriendsStatusResponse,
  GetAllSessionAttributeResponse,
  GetFriendshipStatusResponse,
  GetSessionAttributeResponse,
  JoinDefaultChannelResponse,
  ListIncomingFriendsResponse,
  ListOfFriendsResponse,
  ListOutgoingFriendsResponse,
  MatchmakingNotif,
  MessageNotif,
  MessageSessionNotif,
  OfflineNotificationResponse,
  PartyChatNotif,
  PartyChatResponse,
  PartyCreateResponse,
  PartyDataUpdateNotif,
  PartyGetInvitedNotif,
  PartyInfoResponse,
  PartyInviteNotif,
  PartyInviteResponse,
  PartyJoinNotif,
  PartyJoinResponse,
  PartyKickNotif,
  PartyKickResponse,
  PartyLeaveNotif,
  PartyLeaveResponse,
  PartyPromoteLeaderResponse,
  PartyRejectNotif,
  PartyRejectResponse,
  PersonalChatHistoryResponse,
  PersonalChatNotif,
  PersonalChatResponse,
  RefreshTokenResponse,
  RejectFriendsNotif,
  RejectFriendsResponse,
  RematchmakingNotif,
  RequestFriendsNotif,
  RequestFriendsResponse,
  SendChannelChatResponse,
  SetReadyConsentNotif,
  SetReadyConsentResponse,
  SetSessionAttributeResponse,
  SetUserStatusResponse,
  ShutdownNotif,
  SignalingP2PNotif,
  StartMatchmakingResponse,
  UnblockPlayerNotif,
  UnblockPlayerResponse,
  UnfriendNotif,
  UnfriendResponse,
  UserMetricResponse,
  UserStatusNotif
])

export type WebSocketResponseOrNotification = z.infer<typeof WebSocketResponseOrNotification>
