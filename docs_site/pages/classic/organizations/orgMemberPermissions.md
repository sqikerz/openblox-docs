
# orgMemberPermissions
Gets permissions for a specific member of an organization.


## Parameters
| Name   | Type       | Description                                                |
| :----- | :--------- | :--------------------------------------------------------- |
| orgId  | Identifier | The ID of the organization to get a users permissions for. |
| userId | Identifier | The ID of the user to get permissions for.                 |



## Example
```ts copy showLineNumbers
const { data: perms } = await ClassicOrganizationsApi.orgMemberPermissions({
  orgId: "4244556007738484576",
  userId: 45348281,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  isOwner: true,
  canConfigureOrganization: true,
  canManageRoles: true,
  canManageMembers: true,
  canViewAnalytics: true,
  canPlayExperiences: true,
  canEditExperiences: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/users/{userId}/permissions
```
  