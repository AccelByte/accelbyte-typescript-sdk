import type { Dashboard } from './models'

export const fixtureNow = new Date('2026-09-30T12:00:00Z')
export const fixtureDashboard: Dashboard = {
  player: { userId: 'demo-nullish', name: 'Nullish' },
  rating: 12703,
  updatedAt: '2026-09-30T10:00:00Z',
  cycle: { id: 'demo-season', name: 'Season 7', version: 7, status: 'ACTIVE', nextReset: '2026-10-01T00:00:00Z' },
  cycleRating: 12703,
  seasonChange: 437,
  ranking: { rank: 27, point: 12703 },
  entries: [
    { position: 1, userId: 'demo-ace', point: 14221, name: 'Ace' },
    { position: 2, userId: 'demo-orbit', point: 14180, name: 'Orbit' },
    { position: 3, userId: 'demo-quill', point: 13902, name: 'Quill' },
    { position: 25, userId: 'demo-vale', point: 12789, name: 'Vale' },
    { position: 26, userId: 'demo-kestrel', point: 12744, name: 'Kestrel' },
    { position: 27, userId: 'demo-nullish', point: 12703, name: 'Nullish' },
    { position: 28, userId: 'demo-relay', point: 12680, name: 'Relay' },
    { position: 29, userId: 'demo-sol', point: 12641, name: 'Sol' }
  ],
  history: [
    { timestamp: '2026-08-01T12:00:00Z', value: 11982 },
    { timestamp: '2026-08-15T12:00:00Z', value: 12041 },
    { timestamp: '2026-09-01T00:00:00Z', value: 12266 },
    { timestamp: '2026-09-05T12:00:00Z', value: 12301 },
    { timestamp: '2026-09-11T12:00:00Z', value: 12368 },
    { timestamp: '2026-09-15T12:00:00Z', value: 12510 },
    { timestamp: '2026-09-19T12:00:00Z', value: 12530 },
    { timestamp: '2026-09-24T12:00:00Z', value: 12522 },
    { timestamp: '2026-09-27T12:00:00Z', value: 12620 },
    { timestamp: '2026-09-30T10:00:00Z', value: 12703 }
  ],
  performances: [
    { arena: 'Ruins', score: 994823, ratingChange: 41 },
    { arena: 'Citadel', score: 991204, ratingChange: 38 },
    { arena: 'Outpost', score: 982110, ratingChange: 34 }
  ],
  source: 'fixture'
}
