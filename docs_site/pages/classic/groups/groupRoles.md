
# groupRoles
Gets all roles in a group.


## Parameters
| Name    | Type    | Description                           |
| :------ | :------ | :------------------------------------ |
| groupId | GroupId | The id of the group to get roles for. |



## Example
```ts copy showLineNumbers
const { data: roles } = await ClassicGroupsApi.groupRoles({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 38353814,
    name: "Guest",
    description: "A non-group member.",
    rank: 0,
    memberCount: 0,
  },
  {
    id: 38353811,
    name: "Owner",
    description: "",
    rank: 255,
    memberCount: 1,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/roles
```
  