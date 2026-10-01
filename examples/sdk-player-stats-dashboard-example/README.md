# AGS player stats dashboard reference

This isolated example supports AccelByte's article "Player Stats Beyond the Game Client". Signal Run, Nullish, the arenas and every fixture value are fictional. It is not a production marketing route or a HubSpot widget.

The default fixture preview is runnable without an AGS account. AGS mode uses real SDK public APIs, a public OAuth client and its own sign-in form. It was verified against a live AGS Public Cloud namespace on September 30, 2026, including browser sign-in through the local proxy described below.

## Run the fixture preview

Use Node 24 LTS and Yarn 4.9.2. This run was validated on Node 26.8.1. From this directory:

```sh
yarn install
yarn typecheck
yarn test
yarn build
yarn preview
```

Open `http://localhost:4317/`. Stop the preview with Ctrl+C. For local editing, use `yarn dev` instead of `yarn preview`. The package is self-contained: it has its own Yarn lockfile, its own design tokens in `src/tokens.css`, and its fonts (Barlow and Barlow Condensed) installed from Fontsource, so the directory can be copied or published on its own. Build output goes to `dist/`; regenerate it with `yarn build`.

Use the selector in the footer to preview no activity, service failure and expired-session states. Refresh briefly shows a loading state. Range buttons filter observations over 7, 30 or 365 days, or all recorded observations. Fixture time is fixed at September 30, 2026, so the example remains reproducible later.

## Try AGS mode with the shared demo account

AccelByte's test namespace already has the statistic, cycle, leaderboard and public client this example needs. Use this `.env` to sign in as a shared demo player:

```sh
VITE_DATA_MODE=ags
AGS_PROXY_TARGET=https://ecosep30test-ecooffalsus.prod.gamingservices.accelbyte.io
VITE_AGS_NAMESPACE=ecosep30test-ecooffalsus
VITE_AGS_CLIENT_ID=19eae3ca01e5447480a4455a6948e0d5
VITE_AGS_STAT_CODE=skill-rating
VITE_AGS_LEADERBOARD_CODE=skill-rating-season
VITE_AGS_CYCLE_ID=a79ab356f61a49b9bdbc87e009e5c134
VITE_DEMO_EMAIL=ab_test_1790716969_0@accelbyte.net
VITE_DEMO_PASSWORD=634d16b7
```

Run `yarn dev` (or `yarn build && yarn preview`), open `http://localhost:4317/`. The sign-in screen shows the demo email and password (`VITE_DEMO_EMAIL` and `VITE_DEMO_PASSWORD`) with copy buttons.

| Field    | Value                                |
| -------- | ------------------------------------ |
| Email    | `ab_test_1790716969_0@accelbyte.net` |
| Password | `634d16b7`                           |

Every reader shares this player, so please don't change its password. It is a test account on a test namespace. Its `skill-rating` is 12,712 (rank 4 in Companion Season 1), and its Cloud Save records hold 19 rating snapshots from July to September plus five best runs, so every section is filled. Select **Fill the sign-in form** on the demo panel, then **Sign in**. Because the password is public, anyone can lock the account with failed attempts, change its password or turn on two-factor sign-in, and any of these breaks the demo for everyone. If the demo stops working, reset the account from the Admin Portal.

## Configure AGS mode

Copy `.env.example` to the ignored `.env`, set `VITE_DATA_MODE=ags`, and fill in the settings. Rebuild or restart Vite after changing environment variables. Every `VITE_` setting is visible to the browser. There is no client secret field.

| Setting                     | Meaning                                                                                                                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_AGS_BASE_URL`         | Optional. Unset means the page's own origin, so requests go through the proxy whether you open `localhost` or `127.0.0.1`. Set it to the AGS origin only for direct calls from an allow-listed domain |
| `AGS_PROXY_TARGET`          | AGS origin for the dev/preview proxy, for example `https://<game-namespace>.prod.gamingservices.accelbyte.io`. Not exposed to the browser                                                             |
| `VITE_AGS_NAMESPACE`        | Game namespace containing the statistic and leaderboard                                                                                                                                               |
| `VITE_AGS_CLIENT_ID`        | Public OAuth client for player login in that game namespace                                                                                                                                           |
| `VITE_AGS_STAT_CODE`        | `skill-rating` by default                                                                                                                                                                             |
| `VITE_AGS_LEADERBOARD_CODE` | `skill-rating-season` by default, a Leaderboard v3 configuration                                                                                                                                      |
| `VITE_AGS_CYCLE_ID`         | The Statistics cycle configuration ID attached to both statistic and leaderboard                                                                                                                      |

In a development namespace, configure:

1. A Statistics configuration with code `skill-rating`. Stat codes must match `^[a-z0-9]+([-]{0,1}[a-z0-9]+)*$`, so underscores are rejected; leaderboard codes reject them too. For this fictional absolute-rating model, the trusted game server calculates the rating and uses `OVERRIDE` updates. Choose bounds and default value for your game's rating scale. Allow reads needed by the player, and restrict rating writes to the trusted game backend. This example does not create or update statistics.
2. A Statistics cycle with the desired seasonal schedule, attached to `skill-rating`. Its ID goes in `VITE_AGS_CYCLE_ID`. Choose start/end/reset times, period length and min/max deliberately. An incremental cycle resets to the stat's configured default value; it does not inherently start at zero. An overridden absolute rating is different from a cumulative seasonal score.
3. A v3 leaderboard with code `skill-rating-season`, stat code `skill-rating`, descending order and the same cycle. All-time ranking is optional and is not displayed here. The player should have a stat item and a trusted stat update to generate ranking data.
4. Two Cloud Save player records per player, written only by your trusted server through the admin player-record API with `"__META": { "set_by": "SERVER", "is_public": false }`:
   - `rating-history`: `{ "season": { "cycleId", "cycleVersion", "startValue" }, "snapshots": [{ "timestamp", "value" }] }`. Append a snapshot after each rated match. Write a new `season` baseline when a cycle version starts.
   - `best-runs`: `{ "runs": [{ "arena", "score", "ratingChange", "playedAt" }] }`. The page shows the top three by score.

   The player reads both with `PublicPlayerRecordApi.createUserMeRecordBulk` and no extra permissions. A player write to either record fails with `18201` ("expect [SERVER] but actual [CLIENT]"). Keep each record under Cloud Save's recommended 250 KB.

5. A public IAM client with the `social` scope. The sign-in form uses the `password` grant, so no redirect URI is involved. A player token from this client needs no extra roles or permissions for the reads used here. Don't grant admin permissions to it.

### CORS and the local proxy

On AGS Public Cloud, Statistics and Leaderboard return no CORS headers for any non-AGS origin, so the browser blocks direct calls. IAM's preflight echoes the origin but omits `Access-Control-Allow-Credentials`, which the SDK's credentialed requests need, so direct IAM calls fail too. The same thing happens behind the proxy if the page and `VITE_AGS_BASE_URL` differ (for example, the page on `127.0.0.1:4317` calling `localhost:4317`), which is why the base URL defaults to the page's origin. AccelByte's [Developer FAQ](https://docs.accelbyte.io/gaming-services/knowledge-base/developer-faq/) confirms the domain allow list is Private Cloud only and recommends a local proxy for development. `vite.config.ts` proxies `/iam`, `/social` and `/leaderboard` to `AGS_PROXY_TARGET` for both `yarn dev` and `yarn preview`. A hosted companion on Public Cloud needs the same same-origin forwarding on its own host, typically in the backend that also serves history. Private Cloud customers can ask AccelByte to allow-list the companion domain and point `VITE_AGS_BASE_URL` at AGS directly.

On Public Cloud the AGS host subdomain must match the game namespace in the player's token, for example `https://<game-namespace>.prod.gamingservices.accelbyte.io`. Calls through a different subdomain fail with error `20030` (subdomain mismatch).

Use a dedicated test player. No fixture values are written to AGS. Cycle names and versions are returned by AGS; the adapter does not assume every version number is a marketed season number. The fixture's “Season 7” name and version 7 are an authored example.

## Authentication

The page has its own sign-in form. `signIn()` in `src/ags.ts` posts the email or username and password to `/iam/v3/oauth/token` with `grant_type=password` and a Basic header built from the public client ID with an empty secret, then sets the access token on the SDK. HTTP 400 `wrong password` and 401 `invalid username or password` both show the same "didn't match" message. Other 400/401 bodies, such as `invalid_client` or `invalid_grant`, show a generic failure naming the IAM error. A two-factor challenge (`mfa_token` in the error body) is refused with a clear message instead of being stored. The SDK's `IamUserAuthorizationClient.loginWithPasswordAuthorization()` is not used because in `@accelbyte/sdk-iam` 6.3.7 it calls Node's global `Buffer` and throws in a browser. Identity is read through `UsersApi.getUsersMe_v3()`, not taken from the form.

Tokens are not persisted by application code, and the example does not keep a refresh token or implement refresh. IAM's token response also sets `HttpOnly` `access_token`/`refresh_token` cookies with `Domain=prod.gamingservices.accelbyte.io`; the browser rejects them on `localhost`, and the Vite proxy does not rewrite cookie domains. If you call AGS directly instead (Private Cloud with an allow-listed domain), the SDK sends requests with credentials, so those cookies may be stored as third-party cookies that "Sign out locally" does not clear. That mode was not tested. Reloading requires sign-in again. “Sign out locally” removes the SDK token and the rendered dashboard; it does not revoke the token. Add a documented logout/session lifecycle before using this as a production companion site.

A custom form owns what a hosted login page would otherwise provide: two-factor prompts, password reset, legal-policy acceptance and platform sign-in (Steam, PlayStation and others). This example implements none of them. Players whose accounts only exist through a platform have no password and need a platform sign-in or an account upgrade.

## Data ownership

| Dashboard element                  | Fixture mode                     | AGS mode                                               |
| ---------------------------------- | -------------------------------- | ------------------------------------------------------ |
| Identity                           | Fictional Nullish, no session    | Authenticated `/iam/v3/public/users/me`                |
| Current rating                     | Fictional 12,703                 | Own Statistics item                                    |
| Cycle name, version, status, reset | Fictional Season 7               | Statistics cycle configuration                         |
| Cycle rating                       | Fictional 12,703                 | Own cycle-stat item matching metadata `currentVersion` |
| Rank and nearby entries            | Fictional #27 and neighbors      | Leaderboard v3 per-user and paginated cycle reads      |
| History and season change          | Fictional snapshots and baseline | Cloud Save `rating-history` record (server-written)    |
| Best performances                  | Fictional arena results          | Cloud Save `best-runs` record (server-written)         |

In fixture mode, the graph comes from `src/fixtures.ts`; the fictional season baseline is 12,266 on September 1, and 12,703 minus 12,266 is 437. In AGS mode, the season change is the current rating minus `season.startValue`, and only when the stored `cycleId` and `cycleVersion` match the current cycle; otherwise it's hidden. It is never an AGS cycle value. Best performances are per-run records, not leaderboard rows.

`parseRatingHistory` and `parseBestRuns` in `src/models.ts` treat the record values as untrusted JSON. They keep only snapshots with a valid timestamp and finite value, and runs with a string arena and numeric score and rating change. A player without the records gets empty sections, because missing keys are simply absent from the bulk response.

## APIs, errors and consistency

The pinned SDK packages are core 4.3.4, IAM 6.3.7, Social 6.3.7, and Leaderboard 5.3.7. Statistics belongs to `@accelbyte/sdk-social`. The corresponding public factories and operation names are in `src/ags.ts` and the article. Responses use the current `{ data, headers, status }` wrapper.

Rank is read from the selected `cycles` entry, separately from `allTime`. Paginated rows contain points and IDs, with no rank field. The sample displays `offset + index + 1` and requests two rows before the user's position when possible. Live checks confirmed that per-user ranks are 1-based, `offset` is a 0-based position, and tied points receive consecutive ranks in list order, so the formula matches the per-user rank for every row. A hidden player keeps their rank and row (flagged `hidden: true`) when the leaderboard's server-side hidden filter is off, and the players below are not renumbered. The sample shows a hidden player as “Unranked” and omits hidden rows without renumbering the rest. Other players' names come from each row's `additionalData.displayName`, which the trusted game server writes with every `skill-rating` update. The public IAM lookups by user ID are deprecated, and Basic public profiles have no display name. A rename shows after that player's next stat update, and rows without the field show "Unnamed player". The demo namespace's test players carry these names.

HTTP 404 plus `71233` means no player ranking; 404 plus `71235` means no cycle ranking data; 404 plus `71230` means the leaderboard configuration does not exist and stays a configuration error. All three were confirmed live. HTTP 401, 403, 429 and network/service failures have recovery messages; there is no automatic retry loop. Timeouts are 15 seconds. Missing Statistics items remain `null`, not zero.

Statistics and Leaderboard reads are independent, and updates reach Leaderboard through events. In the live test, six stat updates appeared in the cycle ranking within a second. Metadata and ranking reads are not an atomic snapshot. A reset during loading can produce inconsistent views. Cycle-stat values from a different metadata version are suppressed, but the v3 ranking response has no absolute version field to match. Refresh after the transition; this example does not claim to solve that race.

V3's `previousVersion` option can read the active version and one preceding version. The reference uses the active version; it does not build an archive or season picker. Stat cycles and this ranking option are not arbitrary point-in-time history. See the [statistic cycle guide](https://docs.accelbyte.io/gaming-services/modules/online/statistics/utilizing-statistic-cycle-to-track-users-progress-within-specific-time-frame/) and the [AGS 2025.3 release notes](https://docs.accelbyte.io/gaming-services/knowledge-base/release-notes/older-release-notes/ags-2025.3.0/).

## Validation

`yarn typecheck`, `yarn test`, `yarn format:check`, and `yarn build` check this package. The package has no lint script; TypeScript and Prettier are its static checks. Tests execute the installed SDK with an Axios adapter, including response schema checks, request paths, bearer headers, cycle selection, missing data and error codes. Sign-in tests use jsdom and check the password-grant request, the public-client Basic header without a secret, in-memory token handling, credential errors and the refused two-factor challenge. Vitest disables Node's native web storage in the browser test worker so jsdom supplies storage.

These tests prove SDK compatibility and application behavior against controlled responses. Permissions, CORS, login, ranking ties and error codes were then checked against a live namespace on September 30, 2026. Cycle reset timing was not exercised.

The AGS-mode bundle currently exceeds Vite's 500 kB advisory threshold because of the generated SDK packages. Fixture mode builds a smaller bundle. No charting or state library was added.
