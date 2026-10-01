export type RatingHistoryPoint = { timestamp: string; value: number }
export type TimeRange = '1W' | '1M' | '1Y' | 'ALL'
export type Performance = { arena: string; score: number; ratingChange: number }

export type Dashboard = {
  player: { userId: string; name: string }
  rating: number | null
  updatedAt: string | null
  cycle: { id: string; name: string; version: number; status: string; nextReset: string | null }
  cycleRating: number | null
  seasonChange: number | null
  ranking: { rank: number; point: number } | null
  entries: { position: number; userId: string; point: number; name: string | null }[]
  history: RatingHistoryPoint[]
  performances: Performance[]
  source: 'fixture' | 'ags'
}

type Json = Record<string, unknown>
const isObject = (value: unknown): value is Json => typeof value === 'object' && value !== null && !Array.isArray(value)
const isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)

export function parseRatingHistory(
  value: unknown,
  cycle: { id: string; version: number },
  rating: number | null
): { history: RatingHistoryPoint[]; seasonChange: number | null } {
  if (!isObject(value)) return { history: [], seasonChange: null }
  const snapshots = Array.isArray(value.snapshots) ? value.snapshots : []
  const history = snapshots.flatMap(point =>
    isObject(point) &&
    typeof point.timestamp === 'string' &&
    !Number.isNaN(Date.parse(point.timestamp)) &&
    isNumber(point.value)
      ? [{ timestamp: point.timestamp, value: point.value }]
      : []
  )
  const season = value.season
  const seasonChange =
    rating !== null &&
    isObject(season) &&
    season.cycleId === cycle.id &&
    season.cycleVersion === cycle.version &&
    isNumber(season.startValue)
      ? rating - season.startValue
      : null
  return { history, seasonChange }
}

export function parseBestRuns(value: unknown, limit = 3): Performance[] {
  const runs = isObject(value) && Array.isArray(value.runs) ? value.runs : []
  return runs
    .flatMap(run =>
      isObject(run) && typeof run.arena === 'string' && isNumber(run.score) && isNumber(run.ratingChange)
        ? [{ arena: run.arena, score: run.score, ratingChange: run.ratingChange }]
        : []
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export function filterHistory(points: RatingHistoryPoint[], range: TimeRange, now: Date): RatingHistoryPoint[] {
  const days = { '1W': 7, '1M': 30, '1Y': 365, ALL: Infinity }[range]
  const end = now.getTime()
  const start = end - days * 86_400_000
  return points
    .filter(point => {
      const timestamp = Date.parse(point.timestamp)
      return Number.isFinite(point.value) && timestamp >= start && timestamp <= end
    })
    .sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
}

export function chartCoordinates(points: RatingHistoryPoint[]) {
  if (!points.length) return []
  const times = points.map(point => Date.parse(point.timestamp))
  const values = points.map(point => point.value)
  const first = Math.min(...times)
  const duration = Math.max(...times) - first
  const low = Math.min(...values)
  const spread = Math.max(...values) - low
  return points.map(point => ({
    x: duration ? 8 + ((Date.parse(point.timestamp) - first) / duration) * 84 : 50,
    y: spread ? 85 - ((point.value - low) / spread) * 65 : 52.5
  }))
}

export const formatRating = (value: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value)

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => {
    switch (character) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      default:
        return '&#39;'
    }
  })
}
