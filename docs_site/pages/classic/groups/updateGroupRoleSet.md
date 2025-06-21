
# updateGroupRoleSet
Updates an existing role set.


## Parameters
| Name      | Type       | Description                   |
| :-------- | :--------- | :---------------------------- |
| groupId   | Identifier | The id of the group.          |
| roleSetId | Identifier | The id of the role to update. |
| request   | 🤷         | The updated information.      |



## Example
```ts copy showLineNumbers
const { data: updatedRole } = await ClassicGroupsApi.updateGroupRoleSet({
  groupId: 5850082,
  roleSetId: 38353813,
  newData: {
    name: "Mighty Member",
    description: "A regular group member.",
    rank: 2,
  },
}); 
```


## Example Data
```ts copy showLineNumbers
{
  id: 38353813,
  name: "Mighty Member",
  description: "A regular group member.",
  rank: 2,
  memberCount: 94,
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/groups/{groupId}/rolesets/{roleSetId}
```
  