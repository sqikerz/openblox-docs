
# removeRoleFromOrgMember
Removes a specifc role from an organization member.


## Parameters
| Name   | Type       | Description                                          |
| :----- | :--------- | :--------------------------------------------------- |
| orgId  | Identifier | The ID of the organization to give a user a role in. |
| userId | Identifier | The ID of the user to give a role to.                |
| roleId | Identifier | The ID of the role to be given.                      |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicOrganizationsApi.removeRoleFromOrgMember({
  orgId: "4244556007738484576",
  userId: 45348281,
  roleId: "914257001913009232",
}); 
```


## Example Data
```ts copy showLineNumbers
{ success: true } 
```


## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/organizations/{orgId}/users/{userId}/roles/{roleId}
```
  