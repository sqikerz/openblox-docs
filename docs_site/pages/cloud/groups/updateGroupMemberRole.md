
# updateGroupMemberRole
Updates the group membership for a particular group member. This action requires the requester to be able to manage lower ranked members. Guest or Owner ranks cannot be assigned, and a requester cannot change their own rank.


## Parameters
| Name    | Type       | Description                                     |
| :------ | :--------- | :---------------------------------------------- |
| groupId | GroupId    | The id of the group to change a users role for. |
| userId  | Identifier | The id of the user to change role for.          |
| roleId  | RoleId     | The id of the role to update to.                |



## Example
```ts copy showLineNumbers
const { data: success } = await GroupsApi.updateGroupMemberRole({
  groupId: 5850082,
  userId: 2655994471,
  roleId: 41112469,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "groups/5850082/memberships/MTU5OTk0MDk4NQ",
  createTime: 2020-04-30T10:28:57.147Z,
  updateTime: "2025-05-17T16:26:10.879549500Z",
  user: "users/1599940985",
  role: "groups/5850082/roles/41112469",
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v2/groups/{groupId}/memberships/{userId}
```
  