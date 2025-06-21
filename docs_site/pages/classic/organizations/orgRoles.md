
# orgRoles
Gets a page of roles for an organization.


## Parameters
| Name    | Type   | Description                                      |
| :------ | :----- | :----------------------------------------------- |
| orgId   | OrgId  | The ID of the organization to get roles for.     |
| limit?  | number | The maximum amount of roles to return.           |
| cursor? | string | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: roles } = await ClassicOrganizationsApi.orgRoles({ orgId: "4244556007738484576" }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: "2011766837304130930",
    organizationId: "4244556007738484576",
    name: "New Role 7275",
    color: "Green",
    updatedTime: 2024-05-31T02:34:51.832Z,
  },
  {
    id: "914257001913009232",
    organizationId: "4244556007738484576",
    name: "Developer",
    color: "LightOrange",
    updatedTime: 2024-05-31T01:24:02.823Z,
  },
  {
    id: "3456593169348895666",
    organizationId: "4244556007738484576",
    name: "Tester",
    color: "Teal",
    updatedTime: 2024-05-31T01:24:02.827Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/roles
```
  