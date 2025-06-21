
# orgRolePermissions
Gets permissions for a specific role of an organization.


## Parameters
| Name   | Type       | Description                                                |
| :----- | :--------- | :--------------------------------------------------------- |
| orgId  | Identifier | The ID of the organization to get a roles permissions for. |
| roleId | Identifier | The ID of the role to get permissions for.                 |



## Example
```ts copy showLineNumbers
const { data: perms } = await ClassicOrganizationsApi.orgRolePermissions({
  orgId: "4244556007738484576",
  roleId: "2011766837304130930",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  { category: "Organization", operation: "ManageMembers", enabled: false },
  { category: "Organization", operation: "ManageRoles", enabled: false },
  { category: "Organization", operation: "Configure", enabled: false },
  { category: "Experience", operation: "Play", enabled: false },
  { category: "Experience", operation: "Edit", enabled: false },
  { category: "Experience", operation: "ViewAnalytics", enabled: false },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/roles/{roleId}/permissions
```
  