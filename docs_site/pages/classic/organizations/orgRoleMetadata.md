
# orgRoleMetadata
Gets metadata for a specific role of an organization.


## Parameters
| Name   | Type   | Description                                             |
| :----- | :----- | :------------------------------------------------------ |
| orgId  | OrgId  | The ID of the organization to get a roles metadata for. |
| roleId | RoleId | The ID of the role to get metadata for.                 |



## Example
```ts copy showLineNumbers
const { data: metadata } = await ClassicOrganizationsApi.orgRoleMetadata({
  orgId: "4244556007738484576",
  roleId: "914257001913009232",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: "914257001913009232",
  organizationId: "4244556007738484576",
  name: "Developer",
  color: "LightOrange",
  updatedTime: 2024-05-31T01:24:02.823Z,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/roles/{roleId}/metadata
```
  