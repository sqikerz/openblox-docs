
# overwriteOrgRolePermissions
Overwrites permissions for a role of an organizations.


## Parameters
| Name           | Type                                       | Description                                                     |
| :------------- | :----------------------------------------- | :-------------------------------------------------------------- |
| orgId          | Identifier                                 | The ID of the organization to overwrite a roles permissions in. |
| roleId         | Identifier                                 | The ID of the group to overwrite permissions for.               |
| newPermissions | OverwriteOrgRolePermissions_NewPermissions | The new permissions to assign to the role.                      |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicOrganizationsApi.overwriteOrgRolePermissions({
  orgId: "4244556007738484576",
  roleId: "4500991930780611394",
  newPermissions: {
    manageMembers: true,
    manageRoles: true,
    configure: true,
    play: true,
    edit: true,
    viewAnalytics: true,
  },
}); 
```



## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/organizations/{orgId}/roles/{roleId}/permissions
```
  