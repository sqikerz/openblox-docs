
# declineGroupJoinRequest
Declines a join request.


## Parameters
| Name    | Type       | Description                                        |
| :------ | :--------- | :------------------------------------------------- |
| groupId | Identifier | The id of the group to decline a join request for. |
| userId  | Identifier | The id of the user to decline.                     |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicGroupsApi.declineGroupJoinRequest({ groupId: 5850082, userId: 2655994471 }); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/groups/{groupId}/join-requests/users/${userId}
```
  