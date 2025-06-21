
# authenticatedUserAcceptFriendRequest
Accepts a friend request from a specific user for the authenticated user.


## Parameters
| Name   | Type       | Description                                       |
| :----- | :--------- | :------------------------------------------------ |
| userId | Identifier | The id of the user to accept friend request from. |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicFriendsApi.authenticatedUserAcceptFriendRequest({ userId: 2655994471 }); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/users/{userId}/accept-friend-request
```
  