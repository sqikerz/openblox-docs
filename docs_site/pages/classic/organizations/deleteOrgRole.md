
# deleteOrgRole
Deletes a role from a specific organization.


## Parameters
| Name   | Type       | Description                                       |
| :----- | :--------- | :------------------------------------------------ |
| orgId  | Identifier | The ID of the organization to delete a role from. |
| roleId | Identifier | The ID of the role to be deleted.                 |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicOrganizationsApi.deleteOrgRole({
  orgId: "4244556007738484576",
  roleId: "3960412067952396265",
}); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/organizations/{orgId}/roles/{roleId}
```
  