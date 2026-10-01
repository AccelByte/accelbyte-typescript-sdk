import { describe, expect, it } from 'vitest'
import { AccelByte } from '@accelbyte/sdk'
import { AxiosError, AxiosHeaders, type AxiosAdapter, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { createSdk, errorMessage, loadDashboard, selectCycleRanking, type DashboardConfig } from '../src/ags'
import { chartCoordinates, escapeHtml, filterHistory, formatRating } from '../src/models'

const config: DashboardConfig = {
  baseURL: 'https://game.example.test',
  namespace: 'signalrun',
  clientId: 'public-client',
  redirectURI: 'http://localhost:4317/',
  statCode: 'skill-rating',
  leaderboardCode: 'skill-rating-season',
  cycleId: 'season-cycle'
}
const time = '2026-09-30T10:00:00Z'
const player = {
  authType: 'EMAILPASSWD',
  bans: [],
  country: 'US',
  createdAt: time,
  deletionStatus: false,
  displayName: 'Nullish',
  emailAddress: '',
  emailVerified: true,
  enabled: true,
  lastDateOfBirthChangedTime: time,
  lastEnabledChangedTime: time,
  namespace: config.namespace,
  namespaceRoles: [],
  permissions: [],
  phoneVerified: false,
  platformId: '',
  platformUserId: '',
  roles: [],
  userId: 'player-id',
  username: 'nullish'
}
const stat = {
  createdAt: time,
  updatedAt: time,
  namespace: config.namespace,
  statCode: config.statCode,
  statName: 'Skill rating',
  userId: 'player-id',
  value: 12703
}
const cycle = {
  createdAt: time,
  updatedAt: time,
  currentVersion: 7,
  cycleType: 'SEASONAL',
  id: config.cycleId,
  name: 'Season 7',
  namespace: config.namespace,
  resetTime: '00:00',
  start: '2026-09-01T00:00:00Z',
  status: 'ACTIVE'
}
const slicedPaging = { next: '', previous: '' }
const leaderboardPaging = { First: '', Last: '', Next: '', Previous: '' }

function record(key: string, value: unknown) {
  return {
    key,
    value,
    namespace: config.namespace,
    user_id: 'player-id',
    is_public: false,
    set_by: 'SERVER',
    created_at: time,
    updated_at: time
  }
}

function setup(
  options: {
    userError?: { status: number; code: number }
    empty?: boolean
    cycleVersion?: number
    boardError?: { status: number; code: number }
  } = {}
) {
  const requests: InternalAxiosRequestConfig[] = []
  const adapter: AxiosAdapter = async request => {
    requests.push(request)
    let data: unknown
    let failure: { status: number; code: number } | undefined
    switch (request.url) {
      case '/iam/v3/public/users/me':
        data = player
        break
      case '/social/v1/public/namespaces/signalrun/users/me/statitems':
        data = { data: options.empty ? [] : [stat], paging: slicedPaging }
        break
      case '/social/v1/public/namespaces/signalrun/statCycles/season-cycle':
        data = cycle
        break
      case '/social/v1/public/namespaces/signalrun/users/me/statCycles/season-cycle/statCycleitems':
        data = {
          data: options.empty
            ? []
            : [{ ...stat, cycleId: config.cycleId, cycleName: 'Season 7', cycleVersion: options.cycleVersion ?? 7 }],
          paging: slicedPaging
        }
        break
      case '/leaderboard/v3/public/namespaces/signalrun/leaderboards/skill-rating-season/users/player-id':
        failure = options.userError
        data = {
          userId: 'player-id',
          cycles: options.empty
            ? []
            : [
                { cycleId: 'other-cycle', rank: 1, point: 14000 },
                { cycleId: config.cycleId, rank: 27, point: 12703 }
              ]
        }
        break
      case '/leaderboard/v3/public/namespaces/signalrun/leaderboards/skill-rating-season/cycles/season-cycle':
        failure = options.boardError
        data = {
          data: options.empty
            ? []
            : request.params.offset === 0
              ? [
                  { userId: 'leader', point: 14221, additionalData: {} },
                  { userId: 'second', point: 14180, additionalData: {} },
                  { userId: 'third', point: 13902, additionalData: {} }
                ]
              : [
                  { userId: 'neighbor', point: 12789, additionalData: { displayName: 'Vale' } },
                  { userId: 'hidden', point: 12744, hidden: true, additionalData: {} },
                  { userId: 'player-id', point: 12703, additionalData: {} }
                ],
          paging: leaderboardPaging
        }
        break
      case '/cloudsave/v1/namespaces/signalrun/users/me/records/bulk':
        data = {
          data: options.empty
            ? []
            : [
                record('rating-history', {
                  season: { cycleId: config.cycleId, cycleVersion: options.cycleVersion ?? 7, startValue: 12266 },
                  snapshots: [
                    { timestamp: '2026-09-01T00:00:00Z', value: 12266 },
                    { timestamp: 'not a date', value: 1 },
                    { timestamp: time, value: 12703 }
                  ]
                }),
                record('best-runs', {
                  runs: [
                    { arena: 'Outpost', score: 982110, ratingChange: 34 },
                    { arena: 'Ruins', score: 994823, ratingChange: 41 },
                    { arena: 'Broken', score: '999999', ratingChange: 1 }
                  ]
                })
              ]
        }
        break
      default:
        throw new Error(`Unexpected SDK request ${request.method} ${request.url}`)
    }
    const response: AxiosResponse<unknown> = {
      config: request,
      data: failure ? { errorCode: failure.code } : data,
      status: failure?.status ?? 200,
      statusText: 'test',
      headers: {}
    }
    if (failure) throw new AxiosError('Request failed', 'ERR_BAD_REQUEST', request, undefined, response)
    return response
  }
  const sdk = AccelByte.SDK({ coreConfig: config, axiosConfig: { request: { adapter } } })
  sdk.setToken({ accessToken: 'test-player-token' })
  return { sdk, requests }
}

describe('real SDK request contracts and dashboard mapping', () => {
  it('reads only public routes, filters the configured stat and cycle, and centers the page on the player after the podium', async () => {
    const { sdk, requests } = setup()
    const result = await loadDashboard(sdk, config)
    expect(result.rating).toBe(12703)
    expect(result.cycleRating).toBe(12703)
    expect(result.ranking).toEqual({ rank: 27, point: 12703 })
    expect(result.entries.map(entry => entry.position)).toEqual([1, 2, 3, 25, 27])
    expect(result.entries.map(entry => entry.name)).toEqual([null, null, null, 'Vale', null])
    expect(result.history).toEqual([
      { timestamp: '2026-09-01T00:00:00Z', value: 12266 },
      { timestamp: time, value: 12703 }
    ])
    expect(result.performances.map(run => run.arena)).toEqual(['Ruins', 'Outpost'])
    expect(result.seasonChange).toBe(437)
    expect(requests).toHaveLength(8)
    expect(requests.find(request => request.url?.endsWith('/records/bulk'))?.data).toBe(
      JSON.stringify({ keys: ['rating-history', 'best-runs'] })
    )
    expect(
      requests.every(
        request =>
          !request.url?.includes('/admin/') && request.headers.get('Authorization') === 'Bearer test-player-token'
      )
    ).toBe(true)
    expect(requests.find(request => request.url?.endsWith('/statitems'))?.params).toMatchObject({
      statCodes: [config.statCode],
      limit: 1
    })
    expect(requests.at(-2)?.params).toMatchObject({ offset: 24, limit: 5 })
    expect(requests.at(-1)?.params).toMatchObject({ offset: 0, limit: 3 })
  })

  it('preserves missing values as null rather than displaying a fictional zero', async () => {
    const { sdk, requests } = setup({ empty: true })
    const result = await loadDashboard(sdk, config)
    expect(result.rating).toBeNull()
    expect(result.cycleRating).toBeNull()
    expect(result.ranking).toBeNull()
    expect(result.entries).toEqual([])
    expect(result.history).toEqual([])
    expect(result.performances).toEqual([])
    expect(requests.at(-1)?.params.offset).toBe(0)
  })

  it('does not present a statistic or season baseline from a different cycle version as current', async () => {
    const { sdk } = setup({ cycleVersion: 6 })
    const result = await loadDashboard(sdk, config)
    expect(result.cycleRating).toBeNull()
    expect(result.seasonChange).toBeNull()
    expect(result.history).toHaveLength(2)
  })

  it('treats only the documented missing-user error as unranked', async () => {
    const { sdk } = setup({ userError: { status: 404, code: 71233 } })
    expect((await loadDashboard(sdk, config)).ranking).toBeNull()
    const missingConfig = setup({ userError: { status: 404, code: 71230 } })
    await expect(loadDashboard(missingConfig.sdk, config)).rejects.toBeInstanceOf(AxiosError)
  })

  it('treats a documented missing cycle ranking as empty and propagates permission errors', async () => {
    const missing = setup({ boardError: { status: 404, code: 71235 } })
    expect((await loadDashboard(missing.sdk, config)).entries).toEqual([])
    const forbidden = setup({ boardError: { status: 403, code: 20013 } })
    await expect(loadDashboard(forbidden.sdk, config)).rejects.toBeInstanceOf(AxiosError)
  })

  it('excludes hidden player rankings and selects the configured cycle instead of all-time', () => {
    expect(
      selectCycleRanking(
        {
          userId: 'player-id',
          allTime: { rank: 1, point: 50000 },
          cycles: [{ cycleId: config.cycleId, rank: 27, point: 12703, hidden: true }]
        },
        config.cycleId
      )
    ).toBeNull()
  })

  it('initializes a public client without a secret and keeps the token only in the SDK', () => {
    const sdk = createSdk(config)
    expect(sdk.assembly().coreConfig.clientId).toBe('public-client')
    expect(sdk.assembly().coreConfig).not.toHaveProperty('clientSecret')
    sdk.setToken({ accessToken: 'test-token' })
    sdk.removeToken()
    expect(sdk.getToken().accessToken).toBeUndefined()
  })
})

describe('history and presentation boundaries', () => {
  it('uses inclusive UTC boundaries, sorts observations, excludes invalid/future points, and never mutates the input', () => {
    const now = new Date('2026-09-30T12:00:00Z')
    const points = [
      { timestamp: '2026-09-30T12:00:00Z', value: 12703 },
      { timestamp: '2026-09-23T12:00:00Z', value: 12500 },
      { timestamp: '2026-09-23T11:59:59Z', value: 12499 },
      { timestamp: '2026-10-01T00:00:00Z', value: 13000 },
      { timestamp: 'invalid', value: 12000 },
      { timestamp: '2026-09-29T12:00:00Z', value: NaN }
    ]
    expect(filterHistory(points, '1W', now).map(point => point.value)).toEqual([12500, 12703])
    expect(filterHistory(points, 'ALL', now)).toHaveLength(3)
    expect(points[0]?.value).toBe(12703)
    expect(filterHistory(points, '1M', now)).toHaveLength(3)
    expect(filterHistory(points, '1Y', now)).toHaveLength(3)
  })

  it('positions observations by elapsed time and handles empty, single and flat histories', () => {
    expect(chartCoordinates([])).toEqual([])
    expect(chartCoordinates([{ timestamp: time, value: 0 }])).toEqual([{ x: 50, y: 52.5 }])
    const points = [
      { timestamp: '2026-09-01T00:00:00Z', value: 100 },
      { timestamp: '2026-09-02T00:00:00Z', value: 100 },
      { timestamp: '2026-09-11T00:00:00Z', value: 100 }
    ]
    expect(chartCoordinates(points).map(point => point.x)).toEqual([8, 16.4, 92])
    expect(chartCoordinates(points).every(point => point.y === 52.5)).toBe(true)
  })

  it('formats rating values and escapes untrusted player display names', () => {
    expect(formatRating(12703)).toBe('12,703')
    expect(formatRating(0)).toBe('0')
    expect(escapeHtml('<img src=x onerror="alert(1)"> &')).toBe('&lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp;')
  })

  it.each([401, 403, 404, 429, 503])(
    'gives a recovery action for HTTP %s without exposing response contents',
    status => {
      const error = new AxiosError('sensitive details', undefined, undefined, undefined, {
        status,
        data: { secret: 'not-for-ui' },
        statusText: '',
        headers: {},
        config: { headers: new AxiosHeaders() }
      })
      expect(errorMessage(error)).not.toContain('sensitive')
      expect(errorMessage(error)).not.toContain('not-for-ui')
      expect(errorMessage(error)).toMatch(/again|Check|retry|Contact/)
    }
  )
})
