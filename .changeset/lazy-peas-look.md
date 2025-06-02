---
'@accelbyte/sdk-audit': major
---

- Removed `order` query parameter from `GET /audit/v1/admin/logs` (breaking change)
- Added new optional query params `clientId`, `hasCommentOnly`, and `sort` to `GET /audit/v1/admin/logs`
- Added new endpoints for audit logs export, critical user events, and comments management (GET, POST, DELETE, PATCH) under admin namespaces