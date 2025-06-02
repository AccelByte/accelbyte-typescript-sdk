---
'@accelbyte/sdk-social': minor
---

- All affected endpoints now require the `body` param (was optional before) — across v1 and v2, admin and public routes.
- Added `422` response to one admin stat update endpoint
- Two operation ID renames on public statitem GET endpoints