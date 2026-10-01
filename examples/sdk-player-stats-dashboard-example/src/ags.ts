import { AccelByte, type AccelByteSDK } from '@accelbyte/sdk'
import { OAuth20Api, UsersApi } from '@accelbyte/sdk-iam'
import { StatCycleConfigurationApi, UserStatisticApi, UserStatisticCycleApi } from '@accelbyte/sdk-social'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'
import { LeaderboardDataV3Api, type UserPoint, type UserRankingResponseV3 } from '@accelbyte/sdk-leaderboard'
import { isAxiosError } from 'axios'
import { parseBestRuns, parseRatingHistory, type Dashboard } from './models'

export const recordKeys = { history: 'rating-history', runs: 'best-runs' } as const

export type DashboardConfig = {
  baseURL: string
  namespace: string
  clientId: string
  redirectURI: string
  statCode: string
  leaderboardCode: string
  cycleId: string
}

export function createSdk(config: DashboardConfig) {
  return AccelByte.SDK({
    coreConfig: {
      baseURL: config.baseURL,
      namespace: config.namespace,
      clientId: config.clientId,
      redirectURI: config.redirectURI
    },
    axiosConfig: { request: { timeout: 15_000 } }
  })
}

export async function signIn(sdk: AccelByteSDK, email: string, password: string) {
  const { clientId } = sdk.assembly().coreConfig
  const auth = { headers: { Authorization: `Basic ${btoa(`${clientId}:`)}` } }
  try {
    const { data } = await OAuth20Api(sdk, { axiosConfig: { request: auth } }).postOauthToken_v3({
      grant_type: 'password',
      username: email,
      password
    })
    sdk.setToken({ accessToken: data.access_token })
  } catch (error) {
    if (!isAxiosError(error)) throw new SignInError('rejected', 'unexpected response')
    if (!error.response) throw error
    const body: unknown = error.response.data
    const code = typeof body === 'object' && body !== null && 'error' in body ? String(body.error) : ''
    if (typeof body === 'object' && body !== null && 'mfa_token' in body) throw new SignInError('mfa')
    if (rejectedCredentials.has(code)) throw new SignInError('credentials')
    if (error.response.status === 400 || error.response.status === 401) throw new SignInError('rejected', code)
    throw error
  }
}

// IAM's bodies for a wrong password (400) and an unknown account (401). Other 400/401
// errors, such as invalid_client, are configuration problems rather than typos.
const rejectedCredentials = new Set(['wrong password', 'invalid username or password'])

export class SignInError extends Error {
  constructor(
    readonly reason: 'credentials' | 'mfa' | 'rejected',
    readonly code = ''
  ) {
    super(
      reason === 'mfa'
        ? 'This account uses two-factor sign-in, which this example does not support.'
        : reason === 'credentials'
          ? "That email or username and password didn't match. Check both and try again."
          : `Sign-in failed${code ? ` (${code})` : ''}. Please try again later.`
    )
  }
}

export function selectCycleRanking(response: UserRankingResponseV3, cycleId: string) {
  const ranking = response.cycles.find(cycle => cycle.cycleId === cycleId)
  return ranking && !ranking.hidden && ranking.rank >= 1 ? { rank: ranking.rank, point: ranking.point } : null
}

function hasServiceError(error: unknown, status: number, code: number) {
  if (!isAxiosError<unknown>(error) || error.response?.status !== status) return false
  const data = error.response.data
  return typeof data === 'object' && data !== null && 'errorCode' in data && data.errorCode === code
}

function toEntries(rows: UserPoint[], offset: number): Dashboard['entries'] {
  return rows.flatMap((entry, index) => {
    if (entry.hidden) return []
    const name: unknown = entry.additionalData?.displayName
    return [
      {
        position: offset + index + 1,
        userId: entry.userId,
        point: entry.point,
        name: typeof name === 'string' ? name : null
      }
    ]
  })
}

export async function loadDashboard(sdk: AccelByteSDK, config: DashboardConfig): Promise<Dashboard> {
  const { data: player } = await UsersApi(sdk).getUsersMe_v3()
  const [statResponse, cycleResponse, cycleStatResponse, recordsResponse] = await Promise.all([
    UserStatisticApi(sdk).getUsersMeStatitems({ statCodes: [config.statCode], limit: 1 }),
    StatCycleConfigurationApi(sdk).getStatCycle_ByCycleId(config.cycleId),
    UserStatisticCycleApi(sdk).getStatCycleitemsMeUsers_ByCycleId(config.cycleId, {
      statCodes: [config.statCode],
      limit: 1
    }),
    PublicPlayerRecordApi(sdk).createUserMeRecordBulk({ keys: [recordKeys.history, recordKeys.runs] })
  ])
  const leaderboard = LeaderboardDataV3Api(sdk)
  let ranking: Dashboard['ranking'] = null
  try {
    const { data } = await leaderboard.getUser_ByLeaderboardCode_ByUserId_v3(config.leaderboardCode, player.userId)
    ranking = selectCycleRanking(data, config.cycleId)
  } catch (error) {
    if (!hasServiceError(error, 404, 71233)) throw error
  }
  const offset = Math.max(0, (ranking?.rank ?? 1) - 1 - 2)
  let entries: Dashboard['entries'] = []
  try {
    const { data } = await leaderboard.getCycle_ByLeaderboardCode_ByCycleId_v3(config.leaderboardCode, config.cycleId, {
      offset,
      limit: 5
    })
    entries = toEntries(data.data, offset)
  } catch (error) {
    if (!hasServiceError(error, 404, 71235)) throw error
  }
  if (entries.length && offset > 0) {
    const { data } = await leaderboard.getCycle_ByLeaderboardCode_ByCycleId_v3(config.leaderboardCode, config.cycleId, {
      offset: 0,
      limit: Math.min(3, offset)
    })
    entries = [...toEntries(data.data, 0), ...entries]
  }
  const stat = statResponse.data.data.find(item => item.statCode === config.statCode)
  const cycle = cycleResponse.data
  const cycleStat = cycleStatResponse.data.data.find(
    item => item.statCode === config.statCode && item.cycleVersion === cycle.currentVersion
  )
  const records = new Map(recordsResponse.data.data.map(record => [record.key, record.value]))
  const rating = stat?.value ?? null
  const { history, seasonChange } = parseRatingHistory(
    records.get(recordKeys.history),
    { id: cycle.id, version: cycle.currentVersion },
    rating
  )
  return {
    player: { userId: player.userId, name: player.displayName || 'Player' },
    rating,
    updatedAt: stat?.updatedAt ?? null,
    cycle: {
      id: cycle.id,
      name: cycle.name,
      version: cycle.currentVersion,
      status: cycle.status,
      nextReset: cycle.nextReset ?? null
    },
    cycleRating: cycleStat?.value ?? null,
    seasonChange,
    ranking,
    entries,
    history,
    performances: parseBestRuns(records.get(recordKeys.runs)),
    source: 'ags'
  }
}

export function errorMessage(error: unknown) {
  if (isAxiosError(error)) {
    switch (error.response?.status) {
      case 401:
        return 'Your session expired. Sign in again to view your stats.'
      case 403:
        return "Your account cannot access these stats. Contact the game's support team."
      case 404:
        return 'Season stats could not be found. Please retry later or contact support.'
      case 429:
        return 'Too many requests. Wait a moment, then retry.'
      default:
        return 'Stats are unavailable right now. Check your connection, then retry.'
    }
  }
  return error instanceof Error ? error.message : 'Stats could not be loaded. Please retry.'
}
