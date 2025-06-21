
# groupRolesFromIds
Gets a list of roles from role ids.


## Parameters
| Name    | Type                         | Description              |
| :------ | :--------------------------- | :----------------------- |
| roleIds | ArrayNonEmptyIfConst<RoleId> | The ids of roles to get. |



## Example
```ts copy showLineNumbers
const { data: roles } = await ClassicGroupsApi.groupRolesFromIds({ roleIds: [38353811] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "38353811": {
    groupId: 5850082,
    name: "NamelessGuy2005 - Scriptor",
    rank: 255,
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/roles
```
  