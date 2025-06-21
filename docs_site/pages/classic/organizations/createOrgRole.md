
# createOrgRole
Creates a role in a specific organization.


## Parameters
| Name      | Type      | Description                                     |
| :-------- | :-------- | :---------------------------------------------- |
| orgId     | OrgId     | The ID of the organization to create a role in. |
| roleName  | RoleName  | The name for the new role.                      |
| roleColor | RoleColor | The color for the new role.                     |



## Example
```ts copy showLineNumbers
const { data } = await ClassicOrganizationsApi.createOrgRole({
  orgId: "4244556007738484576",
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
[38;5;117mPOST[0m[2;33m[0m /v1/organizations/{orgId}/roles
```
  