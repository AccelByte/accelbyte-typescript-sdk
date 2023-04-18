/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { rest } from 'msw'

import {
  mockAccountDeletionSuccess,
  mockAppEntitlementInfo,
  mockEligibilities,
  mockErrorTokenWith2FA,
  mockHeadlessUser,
  mockInputValidation,
  mockMfaFactor,
  mockNeedEmailVerifyUser,
  mockSingleGameInfo,
  mockToken,
  mockUnacceptedEligibilities,
  mockUser,
  mockUserDeletionStatus,
  mockUserLinkedPlatform,
  mockUserPaymentMethods,
  mockUserProfile,
  mockUserUnDeletionStatus
} from '@od-shared/mocks/MockVars'
import { mockCountries } from '@od-shared/mocks/MockVars.countries'
import { Env } from '@od-shared/Env'
import { MockEntitlementsVars } from '@od-shared/mocks/MockVars.entitlements'
import { MockAccountVars } from '@od-shared/mocks/MockVars.account'
import { MockLegalVars } from '@od-shared/mocks/MockVars.legal'
import { MockGdprVars } from '@od-shared/mocks/MockVars.gdpr'

const APP_ENTITLEMENT_MOCK = rest.get(
  `/api/platform/public/namespaces/accelbyte/users/${mockUser.userId}/entitlements`,
  (req, res, ctx) => {
    const searchParams = new URL(req.url).searchParams
    const itemType = searchParams.get('entitlementClazz')

    if (itemType === 'OPTIONBOX') {
      return res(ctx.json(MockEntitlementsVars.OptionboxEntitlements))
    }

    return res(ctx.json({ data: [mockAppEntitlementInfo], paging: {} }))
  }
)

export const USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.status(400))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.status(401))
  }),
  rest.get(`/api/basic/v1/public/namespaces/${Env.NAMESPACE}/users/me/profiles`, (_req, res, ctx) => {
    return res(ctx.status(401))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.status(401))
  })
]

export const USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.json(mockUser))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockEligibilities))
  }),
  rest.get(`/api/basic/v1/public/namespaces/${Env.NAMESPACE}/users/me/profiles`, (_req, res, ctx) => {
    return res(ctx.json(mockUserProfile))
  }),
  rest.get(`/api/gdpr/public/namespaces/${Env.NAMESPACE}/users/${mockUser.userId}/deletions/status`, (_req, res, ctx) => {
    return res(ctx.json(mockUserUnDeletionStatus))
  })
]

export const USER_FETCH_SERVER_ERROR_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.status(500))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockEligibilities))
  })
]

export const USER_FETCH_NETWORK_ERROR_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, _ctx) => {
    return res.networkError('Failed to connect')
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockEligibilities))
  })
]

export const USER_IS_HEADLESS_ACCOUNT = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.json(mockHeadlessUser))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockEligibilities))
  }),
  rest.get(`/api/basic/v1/public/namespaces/${Env.NAMESPACE}/users/me/profiles`, (_req, res, ctx) => {
    return res(ctx.json(mockUserProfile))
  }),
  rest.get(`/api/gdpr/public/namespaces/${Env.NAMESPACE}/users/${mockUser.userId}/deletions/status`, (_req, res, ctx) => {
    return res(ctx.json(mockUserUnDeletionStatus))
  }),
  rest.get(`/api/iam/v3/public/inputValidations`, (_req, res, ctx) => {
    return res(ctx.json(mockInputValidation))
  })
]

export const USER_BLOCKED_BY_TWO_FA_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.status(401), ctx.json(mockErrorTokenWith2FA))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.status(401))
  })
]

export const USER_BLOCKED_BY_LEGAL_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.json(mockUser))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockUnacceptedEligibilities))
  })
]

export const USER_BLOCKED_BY_DELETION_STATUS_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.json(mockUser))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockEligibilities))
  }),
  rest.get(`/api/basic/v1/public/namespaces/${Env.NAMESPACE}/users/me/profiles`, (_req, res, ctx) => {
    return res(ctx.json(mockUserProfile))
  }),
  rest.get(`/api/gdpr/public/namespaces/${Env.NAMESPACE}/users/${mockUser.userId}/deletions/status`, (_req, res, ctx) => {
    return res(ctx.json(mockUserDeletionStatus))
  })
]

export const USER_NEED_VERIFY_EMAIL_HANDLERS = [
  rest.post('/api/iam/v3/oauth/token', (_req, res, ctx) => {
    return res(ctx.json(mockToken))
  }),
  rest.get('/api/iam/v3/public/users/me', (_req, res, ctx) => {
    return res(ctx.json(mockNeedEmailVerifyUser))
  }),
  rest.get(`/api/agreement/public/eligibilities/namespaces/${Env.NAMESPACE}`, (_req, res, ctx) => {
    return res(ctx.json(mockEligibilities))
  }),
  rest.get(`/api/basic/v1/public/namespaces/${Env.NAMESPACE}/users/me/profiles`, (_req, res, ctx) => {
    return res(ctx.json(mockUserProfile))
  }),
  rest.get(`/api/gdpr/public/namespaces/${Env.NAMESPACE}/users/${mockUser.userId}/deletions/status`, (_req, res, ctx) => {
    return res(ctx.json(mockUserUnDeletionStatus))
  })
]

export const PROFILE_PAGE_HANDLER = [
  ...USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS,
  rest.get(`/api/iam/v3/public/inputValidations`, (_req, res, ctx) => {
    return res(ctx.json(mockInputValidation))
  }),
  rest.get(`/api/basic/v1/public/namespaces/accelbyte/misc/countries`, (_req, res, ctx) => {
    return res(ctx.json(mockCountries))
  }),
  rest.get(`/api/iam/v3/public/namespaces/accelbyte/users/me/code/request`, (_req, res, ctx) => {
    return res(ctx.status(204))
  }),
  rest.get(`/api/platform/public/namespaces/accelbyte/users/${mockUser.userId}/payment/accounts`, (_req, res, ctx) => {
    return res(ctx.json(mockUserPaymentMethods))
  })
]

export const ACCOUNT_OVERVIEW_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.get(`/api/iam/v3/public/namespaces/accelbyte/users/${mockUser.userId}/distinctPlatforms`, (_req, res, ctx) => {
    return res(ctx.json({ platforms: mockUserLinkedPlatform }))
  }),
  APP_ENTITLEMENT_MOCK,
  rest.get(`/api/platform/public/namespaces/accelbyte/items/byAppId`, (_req, res, ctx) => {
    return res(ctx.json(mockSingleGameInfo))
  })
]

export const PASSWORD_SECURITY_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.get(`/api/iam/v4/public/namespaces/accelbyte/users/me/mfa/factor`, (_req, res, ctx) => {
    return res(ctx.json(mockMfaFactor))
  })
]

export const PURCHASED_ITEMS_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  APP_ENTITLEMENT_MOCK,
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/items/${mockSingleGameInfo.itemId}/locale`, (_req, res, ctx) => {
    return res(ctx.json(mockSingleGameInfo))
  })
]

export const LINKED_ACCOUNT_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.get(`/api/iam/v3/public/namespaces/accelbyte/users/${mockUser.userId}/distinctPlatforms`, (_req, res, ctx) => {
    return res(ctx.json({ platforms: mockUserLinkedPlatform }))
  })
]

export const REDEEM_CODE_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.post(`/api/platform/public/namespaces/accelbyte/users/:userId/fulfillment/code`, async (req, res, ctx) => {
    const body = await req.json()
    if (body && body.code === 'testcode') {
      return res(ctx.json(MockAccountVars.RedeemCodeSuccessfulResponse))
    }

    return res(ctx.json(MockAccountVars.RedeemCodeFailedResponse))
  })
]

export const LEGAL_AGREEMENTS_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.get(`/api/agreement/public/agreements/policies`, (_req, res, ctx) => {
    return res(ctx.json(MockLegalVars.acceptedAgreementsResponse))
  })
]

export const ACCOUNT_DELETION_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.post(`/api/gdpr/public/namespaces/accelbyte/users/${mockUser.userId}/deletions`, (_req, res, ctx) => {
    return res(ctx.json(mockAccountDeletionSuccess))
  })
]

export const PERSONAL_DATA_PAGE_HANDLER = [
  ...PROFILE_PAGE_HANDLER,
  rest.get(`/api/gdpr/public/namespaces/accelbyte/users/${mockUser.userId}/requests`, (_req, res, ctx) => {
    return res(ctx.json(MockGdprVars.gdprRequestListResponse))
  }),
  rest.post(`/api/gdpr/public/namespaces/accelbyte/users/${mockUser.userId}/requests`, (_req, res, ctx) => {
    return res(ctx.json(MockGdprVars.requestResponse))
  }),
  rest.delete(
    `/api/gdpr/public/namespaces/accelbyte/users/${mockUser.userId}/requests/${MockGdprVars.gdprRequestListResponse.Data[0].RequestDate}`,
    (_req, res, ctx) => {
      return res(ctx.status(204))
    }
  ),
  rest.post(
    `/api/gdpr/public/namespaces/accelbyte/users/${mockUser.userId}/requests/${MockGdprVars.gdprRequestListResponse.Data[1].RequestDate}/generate`,
    (_req, res, ctx) => {
      return res(ctx.json(MockGdprVars.downloadResponse))
    }
  )
]

export const TWITCH_DROP_PAGE_HANDLER = [
  ...USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS,
  rest.get(`/api/iam/v3/public/namespaces/accelbyte/users/${mockUser.userId}/platforms`, (_req, res, ctx) => {
    return res(ctx.json(MockAccountVars.twitchDropPlatformResponse))
  })
]
