
# declineGroupJoinRequest
Declines a group join request.


## Parameters
| Name    | Type       | Description                                        |
| :------ | :--------- | :------------------------------------------------- |
| groupId | Identifier | The id of the group to decline a join request for. |
| userId  | Identifier | The id of the user to decline from the group.      |



## Example
```ts copy showLineNumbers
const { data: success } = await GroupsApi.declineGroupJoinRequest({ groupId: 5850082, userId: 2655994471 }); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v2/groups/{groupId}/join-requests/{userId}:decline
```
  