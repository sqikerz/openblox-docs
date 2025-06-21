
# groupJoinRequestInfo
Gets a join request for a user.


## Parameters
| Name    | Type       | Description          |
| :------ | :--------- | :------------------- |
| groupId | Identifier | The id of the group. |
| userId  | UserId     | The id of the user.  |



## Example
```ts copy showLineNumbers
const { data: joinRequest } = await ClassicGroupsApi.groupJoinRequestInfo({ groupId: 5850082, userId: 2655994471 }); 
```


## Example Data
```ts copy showLineNumbers
{
  requester: {
    hasVerifiedBadge: false,
    userId: 2655994471,
    username: "MightyPartJr",
    displayName: "MightyPartJr",
  },
  created: 2023-09-12T11:31:18.933Z,
} 
```


## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/groups/{groupId}/join-requests/users/${userId}
```
  