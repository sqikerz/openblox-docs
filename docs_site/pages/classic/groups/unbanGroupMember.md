
# unbanGroupMember
Unbans a member from a group.


## Parameters
| Name    | Type       | Description                                 |
| :------ | :--------- | :------------------------------------------ |
| groupId | Identifier | The id of the group to unban a member from. |
| userId  | UserId     | The id of the member to unban.              |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicGroupsApi.unbanGroupMember({ groupId: 5850082, userId: 1599940985 }); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/groups/{groupId}/bans/{userId}
```
  