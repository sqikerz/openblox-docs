
# orgMembers
Gets a page of members for an organization.


## Parameters
| Name    | Type   | Description                                      |
| :------ | :----- | :----------------------------------------------- |
| orgId   | OrgId  | The ID of the organization to get members for.   |
| limit?  | number | The maximum amount of members to return.         |
| cursor? | string | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: members } = await ClassicOrganizationsApi.orgMembers({ orgId: "4244556007738484576" }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    userId: "45348281",
    roles: [
      {
        id: "914257001913009232",
        organizationId: "4244556007738484576",
        name: "Developer",
        color: "LightOrange",
        updatedTime: 2024-05-31T01:24:02.823Z,
      },
    ],
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/users
```
  