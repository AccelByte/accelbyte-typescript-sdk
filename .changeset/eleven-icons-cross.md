---
'@accelbyte/sdk-ams': minor
---

- Replaced API operation ID `AdminAccountLinkTokenPost` with `AdminAccountLink` for account linking
- Added optional `sortBy` and `sortDirection` query parameters to artifacts listing
- Added new PATCH endpoint for development server configurations
- Enhanced fleets listing with multiple optional query parameters: `active`, `count`, `name`, `offset`, `region`, `sortBy`, and `sortDirection`
- Expanded images listing with new optional query parameters: `count`, `inUse`, `isProtected`, `name`, `offset`, `sortBy`, `sortDirection`, `status`, and `tag`