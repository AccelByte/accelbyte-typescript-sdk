import '@fontsource/barlow/400.css'
import '@fontsource/barlow/600.css'
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/700.css'
import '@fontsource/barlow-condensed/800-italic.css'
import { createSdk, errorMessage, loadDashboard, signIn, SignInError, type DashboardConfig } from './ags'
import { fixtureDashboard, fixtureNow } from './fixtures'
import {
  chartCoordinates,
  escapeHtml,
  filterHistory,
  formatRating,
  type Dashboard,
  type RatingHistoryPoint,
  type TimeRange
} from './models'
import './style.css'

type State =
  | { kind: 'signed-out'; error?: string; email?: string; invalid?: boolean }
  | { kind: 'loading' }
  | { kind: 'ready'; dashboard: Dashboard }
  | { kind: 'error'; message: string }

const root = document.getElementById('app')
if (!root) throw new Error('Dashboard container is missing.')
const app = root
const mode = import.meta.env.VITE_DATA_MODE ?? 'fixture'
if (mode !== 'fixture' && mode !== 'ags') throw new Error('VITE_DATA_MODE must be fixture or ags.')
const isFixture = mode === 'fixture'
const demoLogin =
  import.meta.env.VITE_DEMO_EMAIL && import.meta.env.VITE_DEMO_PASSWORD
    ? { email: String(import.meta.env.VITE_DEMO_EMAIL), password: String(import.meta.env.VITE_DEMO_PASSWORD) }
    : null
let state: State = { kind: 'signed-out' }
let range: TimeRange = '1M'
let scenario = 'ready'
let introPlayed = false
let chartPoints: RatingHistoryPoint[] = []

function requiredEnv(key: string) {
  const value: unknown = import.meta.env[key]
  if (typeof value !== 'string' || !value.trim()) throw new Error(`Missing browser configuration: ${key}`)
  return value.trim()
}

function readConfig(): DashboardConfig {
  return {
    baseURL: import.meta.env.VITE_AGS_BASE_URL?.trim() || window.location.origin,
    namespace: requiredEnv('VITE_AGS_NAMESPACE'),
    clientId: requiredEnv('VITE_AGS_CLIENT_ID'),
    redirectURI: window.location.origin,
    statCode: requiredEnv('VITE_AGS_STAT_CODE'),
    leaderboardCode: requiredEnv('VITE_AGS_LEADERBOARD_CODE'),
    cycleId: requiredEnv('VITE_AGS_CYCLE_ID')
  }
}

const dateLabel = (timestamp: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(timestamp))

const signed = (value: number) => `${value >= 0 ? '+' : '−'}${formatRating(Math.abs(value))}`

const icons = {
  refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5"/></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="1"/><path d="M5 15V5a1 1 0 0 1 1-1h9"/></svg>',
  exit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5M10 16l-4-4 4-4M6 12h10"/></svg>'
}

const mark = `<svg class="mark" viewBox="0 0 40 24" aria-hidden="true"><path d="M8 0h10L10 24H0z"/><path d="M24 0h16l-8 24H16z"/></svg>`

function source(label: string, live = false) {
  return `<span class="bug${live ? ' bug-live' : ''}">${escapeHtml(label)}</span>`
}

function segment(title: string, bug: string, extra = '') {
  return `<div class="segment"><h2>${title}</h2>${extra}${bug}</div>`
}

function niceTicks(low: number, high: number) {
  const span = Math.max(high - low, 1)
  const step = [10, 20, 25, 50, 100, 200, 250, 500, 1000].find(size => span / size <= 4) ?? 2000
  const start = Math.floor(low / step) * step
  const ticks: number[] = []
  for (let value = start; value <= high + step; value += step) ticks.push(value)
  return ticks
}

function renderChart(dashboard: Dashboard) {
  chartPoints = filterHistory(dashboard.history, range, isFixture ? fixtureNow : new Date())
  const first = chartPoints[0]
  const last = chartPoints.at(-1)
  if (!first || !last) {
    return `<div class="no-feed"><p class="no-feed-title">No history feed</p><p>${
      isFixture
        ? 'No rating snapshots in this range. Try a longer range.'
        : 'No rating snapshots yet. The game server adds one to your Cloud Save record after each rated match.'
    }</p></div>`
  }
  const values = chartPoints.map(point => point.value)
  const ticks = niceTicks(Math.min(...values), Math.max(...values))
  const low = ticks[0] ?? 0
  const high = ticks.at(-1) ?? 1
  const scaled = [
    ...chartPoints,
    { timestamp: first.timestamp, value: low },
    { timestamp: last.timestamp, value: high }
  ]
  const coordinates = chartCoordinates(scaled).slice(0, chartPoints.length)
  return `<div class="chart" tabindex="0" role="slider" aria-label="Rating observations" aria-valuemin="0" aria-valuemax="${chartPoints.length - 1}">
      <div class="chart-axis">${ticks
        .map(tick => `<span style="--y:${85 - ((tick - low) / (high - low || 1)) * 65}%">${formatRating(tick)}</span>`)
        .join('')}</div>
      <div class="chart-plot">
        ${ticks.map(tick => `<i class="division" style="--y:${85 - ((tick - low) / (high - low || 1)) * 65}%"></i>`).join('')}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline points="${coordinates.map(point => `${point.x},${point.y}`).join(' ')}" />
        </svg>
        ${coordinates.map(point => `<i class="dot" style="--x:${point.x}%;--y:${point.y}%"></i>`).join('')}
        <div class="scrub" aria-hidden="true"><i class="scrub-line"></i><div class="callout"><strong></strong><span></span></div></div>
      </div>
      <div class="chart-dates"><span>${dateLabel(first.timestamp)}</span><span>${dateLabel(last.timestamp)} · UTC</span></div>
    </div>
    <details class="history-table"><summary>All ${chartPoints.length} observations</summary>
      <table><thead><tr><th>Date (UTC)</th><th>Rating</th></tr></thead><tbody>
      ${chartPoints.map(point => `<tr><td>${escapeHtml(point.timestamp.slice(0, 16).replace('T', ' '))}</td><td>${formatRating(point.value)}</td></tr>`).join('')}
      </tbody></table>
    </details>`
}

function scrubTo(index: number) {
  const chart = app.querySelector<HTMLElement>('.chart')
  const point = chartPoints[index]
  if (!chart || !point) return
  const values = [...chart.querySelectorAll<HTMLElement>('.dot')]
  const dot = values[index]
  if (!dot) return
  values.forEach((item, position) => item.classList.toggle('dot-active', position === index))
  const scrub = chart.querySelector<HTMLElement>('.scrub')
  scrub?.style.setProperty('--x', dot.style.getPropertyValue('--x'))
  scrub?.style.setProperty('--y', dot.style.getPropertyValue('--y'))
  scrub?.classList.toggle('scrub-flip', Number.parseFloat(dot.style.getPropertyValue('--x')) > 70)
  const previous = chartPoints[index - 1]
  const delta = previous ? ` · ${signed(point.value - previous.value)}` : ''
  const strong = chart.querySelector('.callout strong')
  const span = chart.querySelector('.callout span')
  if (strong) strong.textContent = formatRating(point.value)
  if (span) span.textContent = `${dateLabel(point.timestamp)}${delta}`
  chart.dataset.index = String(index)
  chart.setAttribute('aria-valuenow', String(index))
  chart.setAttribute('aria-valuetext', `${dateLabel(point.timestamp)}, rating ${formatRating(point.value)}${delta}`)
}

function renderPlate(dashboard: Dashboard) {
  const name = escapeHtml(dashboard.player.name)
  const initials = escapeHtml(dashboard.player.name.slice(0, 2).toUpperCase())
  const cycle = escapeHtml(dashboard.cycle.name)
  return `<section class="plate" aria-label="Player standing">
      <div class="plate-body">
        <span class="monogram" aria-hidden="true">${initials}</span>
        <div class="plate-id">
          <p class="plate-name">${name}</p>
          <p class="plate-label">Skill rating</p>
          <p class="rating-value${dashboard.rating === null ? ' is-empty' : ''}">${dashboard.rating === null ? 'Unrated' : formatRating(dashboard.rating)}</p>
          ${dashboard.seasonChange === null ? '' : `<p class="change">${signed(dashboard.seasonChange)} this season</p>`}
        </div>
      </div>
      <dl class="strip">
      <div><dt>Cycle rating</dt><dd>${dashboard.cycleRating === null ? 'No activity' : formatRating(dashboard.cycleRating)}</dd></div>
      <div><dt>Cycle</dt><dd>${escapeHtml(dashboard.cycle.status)} · v${dashboard.cycle.version}</dd></div>
      <div><dt>Next reset</dt><dd>${dashboard.cycle.nextReset ? dateLabel(dashboard.cycle.nextReset) : 'Not scheduled'}</dd></div>
      <div><dt>Stat updated</dt><dd>${dashboard.updatedAt ? dateLabel(dashboard.updatedAt) : 'Never'}</dd></div>
      </dl>
      <div class="rank-block">
        <p class="rank-value${dashboard.ranking ? '' : ' is-empty'}">${dashboard.ranking ? `#${dashboard.ranking.rank}` : 'Unranked'}</p>
        <p class="rank-label">Global · ${cycle}</p>
      </div>
    </section>
    <p class="provenance">${
      isFixture
        ? 'Fictional values shaped like AGS Statistics, stat cycle and Leaderboard v3 responses.'
        : 'Rating and cycle from AGS Statistics · rank from AGS Leaderboard v3.'
    }</p>`
}

function renderPlays(dashboard: Dashboard) {
  if (!dashboard.performances.length) {
    return `<div class="no-feed"><p class="no-feed-title">No run records</p><p>${isFixture ? 'No runs recorded in this preview state.' : 'No runs yet. The game server records your best runs in Cloud Save after each match.'}</p></div>`
  }
  return `<ol class="plays">${dashboard.performances
    .map(
      (
        play,
        index
      ) => `<li><span class="pos play-rank">${index + 1}</span><span class="play-arena">${escapeHtml(play.arena)}</span>
        <span class="play-score">${formatRating(play.score)}</span><span class="play-delta">${signed(play.ratingChange)}<small>rating</small></span></li>`
    )
    .join('')}</ol>`
}

function renderStandings(dashboard: Dashboard) {
  if (!dashboard.entries.length) {
    return `<div class="no-feed"><p class="no-feed-title">No standings yet</p><p>Complete a rated match to enter this cycle's leaderboard.</p></div>`
  }
  return `<table class="standings"><caption class="visually-hidden">Leaderboard positions around you</caption>
    <thead><tr><th scope="col">Pos</th><th scope="col">Player</th><th scope="col">Rating</th></tr></thead><tbody>
    ${dashboard.entries
      .map((entry, index, all) => {
        const gap = index > 0 && entry.position - (all[index - 1]?.position ?? 0) > 1
        const own = entry.userId === dashboard.player.userId
        const label = own ? dashboard.player.name : (entry.name ?? 'Unnamed player')
        const podium = entry.position <= 3 ? ` podium-${entry.position}` : ''
        return `${gap ? '<tr class="gap" aria-hidden="true"><td colspan="3"></td></tr>' : ''}<tr class="${own ? 'own' : ''}${podium}"><td><span class="pos">${entry.position}</span></td><th scope="row">${escapeHtml(label)}${own ? '<span class="you">You</span>' : ''}</th><td>${formatRating(entry.point)}</td></tr>`
      })
      .join('')}
    </tbody></table>`
}

function renderDashboard(dashboard: Dashboard) {
  const cycle = escapeHtml(dashboard.cycle.name)
  const records = isFixture ? 'Fixture · Cloud Save records' : 'AGS Cloud Save'
  return `${titleCard(`${cycle} · Signal Run ranked`)}
    ${renderPlate(dashboard)}
    <section class="progression">
      ${segment(
        'Rating progression',
        source(records, !isFixture),
        !isFixture && !dashboard.history.length
          ? ''
          : `<div class="ranges" role="group" aria-label="History range">${(
              ['1W', '1M', '1Y', 'ALL'] satisfies TimeRange[]
            )
              .map(item => `<button data-range="${item}" aria-pressed="${item === range}">${item}</button>`)
              .join('')}</div>`
      )}
      ${renderChart(dashboard)}
    </section>
    <div class="columns">
      <section>${segment('Top plays', source(records, !isFixture))}${renderPlays(dashboard)}</section>
      <section>${segment('Standings', source(isFixture ? 'Fixture · leaderboard' : 'AGS Leaderboard v3', !isFixture))}
        <p class="standings-note">${cycle} · ${dashboard.ranking ? 'around your position' : 'leading players'}</p>
        ${renderStandings(dashboard)}
      </section>
    </div>
    <p class="provenance">Statistics and Leaderboard are separate reads; a new result can reach your rating a moment before your rank.</p>`
}

function titleCard(subtitle: string, action = '') {
  return `<div class="title-card"><div><h1>Field report</h1><p>${subtitle}</p></div>${action}</div>`
}

function renderSignedOut() {
  const demo = demoLogin
    ? `<aside class="demo" aria-label="Shared demo account">
        <p class="demo-title">Shared demo account</p>
        <dl>
          <div><dt>Email</dt><dd><code>${escapeHtml(demoLogin.email)}</code><button class="copy" type="button" data-copy="${escapeHtml(demoLogin.email)}" data-copied="Email copied" aria-label="Copy email">${icons.copy}</button></dd></div>
          <div><dt>Password</dt><dd><code>${escapeHtml(demoLogin.password)}</code><button class="copy" type="button" data-copy="${escapeHtml(demoLogin.password)}" data-copied="Password copied" aria-label="Copy password">${icons.copy}</button></dd></div>
        </dl>
        <p class="demo-note">Every reader shares this test player on AccelByte's demo namespace. Please don't change its password.</p>
        <button class="ghost" type="button" data-action="fill-demo">Fill the sign-in form</button>
        <p class="visually-hidden" role="status" data-copy-status></p>
      </aside>`
    : ''
  const error = state.kind === 'signed-out' ? state.error : undefined
  const email = state.kind === 'signed-out' ? (state.email ?? '') : ''
  const invalid =
    state.kind === 'signed-out' && state.invalid ? ' aria-invalid="true" aria-describedby="signin-error"' : ''
  return `${titleCard('Your standing, between matches')}
    <section class="plate plate-signin${demo ? ' has-demo' : ''}">
      <div class="plate-body"><div class="plate-id">
        <h2 class="plate-name">Sign in to see your standing</h2>
        <p>Use your Signal Run account. Rating, season rank and nearby rivals load straight from it.</p>
        <form class="signin" data-form="signin">
          <label>Email or username<input name="email" autocomplete="username" required value="${escapeHtml(email)}"${invalid} /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" required${invalid} /></label>
          ${error ? `<p class="form-error" id="signin-error" role="alert">${escapeHtml(error)}</p>` : ''}
          <button class="primary" type="submit">Sign in</button>
        </form>
      </div></div>
      ${demo}
    </section>`
}

function render() {
  let content: string
  switch (state.kind) {
    case 'signed-out':
      content = renderSignedOut()
      break
    case 'loading':
      content = `${titleCard('Pulling your stats')}<div class="loading" aria-busy="true"><i></i><p role="status">Fetching player stats and seasonal rankings…</p></div>`
      break
    case 'error':
      content = `${titleCard('Feed interrupted')}<section class="plate plate-error"><div class="plate-body"><div class="plate-id">
        <p class="plate-name">Stats unavailable</p><p role="alert">${escapeHtml(state.message)}</p>
        <div class="actions"><button class="primary" data-action="refresh">Retry</button>${live ? '<button class="ghost ghost-ink" data-action="login">Sign in again</button>' : ''}</div>
      </div></div></section>`
      break
    case 'ready':
      content = renderDashboard(state.dashboard)
      break
  }
  const intro = state.kind === 'ready' && !introPlayed
  app.innerHTML = `<header class="bugbar"><a class="brand" href="/">${mark}<span>Signal Run</span><small>Player companion</small></a>
      <div class="bugbar-end">${isFixture ? source('Fixture data') : source('AGS live', true)}${
        state.kind === 'ready'
          ? `<button class="ghost icon-button" data-action="refresh" aria-label="Refresh stats">${icons.refresh}<span>Refresh</span></button>`
          : ''
      }${
        !isFixture && state.kind === 'ready'
          ? `<button class="ghost icon-button" data-action="logout" aria-label="Sign out locally">${icons.exit}<span>Sign out locally</span></button>`
          : ''
      }</div></header>
    <main class="${intro ? 'intro' : ''}">${content}</main>
    <footer><p>${isFixture ? 'Reference example · every name and value is fictional · no session' : 'Reference example · history and top plays come from server-written Cloud Save records'}. Signal Run is a fictional game.</p>${
      isFixture
        ? `<label>Preview state <select id="scenario"><option value="ready">Loaded stats</option><option value="empty">No player activity</option><option value="error">Service unavailable</option><option value="expired">Session expired</option></select></label>`
        : ''
    }</footer>`
  if (state.kind === 'ready') introPlayed = true
  const select = app.querySelector('select')
  if (select) select.value = scenario
  if (chartPoints.length && state.kind === 'ready') scrubTo(chartPoints.length - 1)
}

let live: { sdk: ReturnType<typeof createSdk>; config: DashboardConfig } | undefined

async function refresh() {
  state = { kind: 'loading' }
  render()
  try {
    if (isFixture) {
      await new Promise(resolve => setTimeout(resolve, 350))
      if (scenario === 'error') throw new Error('Stats are unavailable right now. Check your connection, then retry.')
      if (scenario === 'expired') throw new Error('Your session expired. Sign in again to view your stats.')
      const dashboard =
        scenario === 'empty'
          ? {
              ...fixtureDashboard,
              rating: null,
              updatedAt: null,
              cycleRating: null,
              seasonChange: null,
              ranking: null,
              entries: [],
              history: [],
              performances: []
            }
          : fixtureDashboard
      state = { kind: 'ready', dashboard }
    } else if (live) {
      state = { kind: 'ready', dashboard: await loadDashboard(live.sdk, live.config) }
    } else {
      throw new Error('Configure the public AGS client before loading player stats.')
    }
  } catch (error) {
    state = { kind: 'error', message: errorMessage(error) }
  }
  render()
}

function nearestIndex(chart: HTMLElement, clientX: number) {
  const plot = chart.querySelector('.chart-plot')?.getBoundingClientRect()
  if (!plot) return 0
  const x = ((clientX - plot.left) / plot.width) * 100
  const dots = [...chart.querySelectorAll<HTMLElement>('.dot')].map(dot =>
    Number.parseFloat(dot.style.getPropertyValue('--x'))
  )
  return dots.reduce((best, value, index) => (Math.abs(value - x) < Math.abs((dots[best] ?? 0) - x) ? index : best), 0)
}

app.addEventListener('pointermove', event => {
  if (!(event.target instanceof Element)) return
  const chart = event.target.closest<HTMLElement>('.chart')
  if (chart) scrubTo(nearestIndex(chart, event.clientX))
})

app.addEventListener('keydown', event => {
  if (!(event.target instanceof HTMLElement) || !event.target.classList.contains('chart')) return
  const current = Number(event.target.dataset.index ?? chartPoints.length - 1)
  const next =
    event.key === 'ArrowLeft'
      ? current - 1
      : event.key === 'ArrowRight'
        ? current + 1
        : event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? chartPoints.length - 1
            : null
  if (next === null) return
  event.preventDefault()
  scrubTo(Math.min(Math.max(next, 0), chartPoints.length - 1))
})

app.addEventListener('click', event => {
  if (!(event.target instanceof Element)) return
  const button = event.target.closest('button')
  if (!button) return
  const selected = button.dataset.range
  if (selected === '1W' || selected === '1M' || selected === '1Y' || selected === 'ALL') {
    range = selected
    render()
    app.querySelector<HTMLButtonElement>(`[data-range="${range}"]`)?.focus()
  }
  if (button.dataset.copy) {
    const announcement = button.dataset.copied ?? 'Copied'
    void navigator.clipboard.writeText(button.dataset.copy).then(() => {
      const status = app.querySelector('[data-copy-status]')
      if (status) status.textContent = announcement
      button.classList.add('copied')
      setTimeout(() => button.classList.remove('copied'), 1200)
    })
  }
  switch (button.dataset.action) {
    case 'refresh':
      void refresh()
      break
    case 'login':
      state = { kind: 'signed-out' }
      render()
      app.querySelector<HTMLInputElement>('input[name="email"]')?.focus()
      break
    case 'fill-demo': {
      const email = app.querySelector<HTMLInputElement>('input[name="email"]')
      const password = app.querySelector<HTMLInputElement>('input[name="password"]')
      if (demoLogin && email && password) {
        email.value = demoLogin.email
        password.value = demoLogin.password
        app.querySelector<HTMLButtonElement>('form button[type="submit"]')?.focus()
      }
      break
    }
    case 'logout':
      live?.sdk.removeToken()
      state = { kind: 'signed-out' }
      render()
      break
  }
})

app.addEventListener('submit', event => {
  if (!(event.target instanceof HTMLFormElement) || event.target.dataset.form !== 'signin') return
  event.preventDefault()
  const form = new FormData(event.target)
  void submitSignIn(String(form.get('email') ?? '').trim(), String(form.get('password') ?? ''))
})

async function submitSignIn(email: string, password: string) {
  if (!live) return
  if (!email) {
    showSignInError(email, 'Enter your email or username.', true)
    return
  }
  state = { kind: 'loading' }
  render()
  try {
    await signIn(live.sdk, email, password)
  } catch (error) {
    showSignInError(email, errorMessage(error), error instanceof SignInError && error.reason === 'credentials')
    return
  }
  await refresh()
}

function showSignInError(email: string, error: string, invalid: boolean) {
  state = { kind: 'signed-out', email, error, invalid }
  render()
  app.querySelector<HTMLInputElement>(email ? 'input[name="password"]' : 'input[name="email"]')?.focus()
}

app.addEventListener('change', event => {
  if (event.target instanceof HTMLSelectElement) {
    scenario = event.target.value
    void refresh()
  }
})

async function start() {
  render()
  if (isFixture) {
    await refresh()
    return
  }
  try {
    const config = readConfig()
    live = { sdk: createSdk(config), config }
  } catch (error) {
    state = { kind: 'error', message: errorMessage(error) }
    render()
  }
}

void start()
