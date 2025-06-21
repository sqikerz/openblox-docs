
# groupMembersWithRole
Gets group members that have a specified role.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| groupId    | Identifier            | The id of the group.                             |
| roleSetId  | Identifier            | The id of the role.                              |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder? | SortOrder             | The order that the results are sorted in.        |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: membersWithRole } = await ClassicGroupsApi.groupMembersWithRole({
  groupId: 5850082,
  roleSetId: 38353811,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    hasVerifiedBadge: false,
    userId: 45348281,
    username: "MightyPart",
    displayName: "MightyPart",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/roles/{roleSetId}/users
```
  