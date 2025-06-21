
# orgRoleMembers
Gets a page of members for a specific role in an organization.


## Parameters
| Name    | Type       | Description                                      |
| :------ | :--------- | :----------------------------------------------- |
| orgId   | Identifier | The ID of the organization to get members for.   |
| limit?  | number     | The maximum amount of members to return.         |
| cursor? | string     | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: members } = await ClassicOrganizationsApi.orgRoleMembers({
  orgId: "4244556007738484576",
  roleId: "4500991930780611394",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    userId: "45348281",
    roles: [
      {
        id: "4500991930780611394",
        organizationId: "4244556007738484576",
        name: "Orange",
        color: "Orange",
        updatedTime: 2024-05-31T03:13:24.753Z,
      },
    ],
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/roles/{roleId}/users
```
  