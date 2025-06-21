
# updateOrgRole
Updates an existing role in a specific organization.


## Parameters
| Name      | Type      | Description                                     |
| :-------- | :-------- | :---------------------------------------------- |
| orgId     | OrgId     | The ID of the organization to update a role in. |
| roleId    | RoleId    | The ID of the role to update.                   |
| roleName  | RoleName  | The new name for the role.                      |
| roleColor | RoleColor | The new color for the role.                     |



## Example
```ts copy showLineNumbers
const { data: updatedRoleInfo } = await ClassicOrganizationsApi.updateOrgRole({
  orgId: "4244556007738484576",
  roleId: "517896615410563397",
  roleName: "Admin",
  roleColor: "LightOrange",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: "4508567586590971666",
  organizationId: "4244556007738484576",
  name: "Admin",
  color: "LightOrange",
  updatedTime: 2024-05-31T03:25:37.841Z,
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/organizations/{orgId}/roles/{roleId}/metadata
```
  